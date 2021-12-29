import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@boilerplatejs/core/components/layout';
import {Progress} from '@boilerplatejs/core/components/layout';
import {load, dismiss} from '@fox-zero/web/actions/Nav';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {solutions} from '@fox-zero/web/data';
import formatters from '@fox-zero/web/lib/formatters';
import * as analytics from '@fox-zero/web/lib/analytics';

const DEFAULT_ID = 'home';
const RESET_SLIDE = 0;

@connect(state => ({section: state.router.params.section}), {load, dismiss, transition})

export default class extends Nav {
  static propTypes = {
    load: PropTypes.func.isRequired,
    transition: PropTypes.func.isRequired,
    dismiss: PropTypes.func.isRequired,
    section: PropTypes.string
  };

  id = DEFAULT_ID;

  componentDidMount = () => this.props.load();

  scrollTo = (id, source) => {
    const { transition, dismiss, section } = this.props;
    const app = document.querySelector('#app');
    let label;

    if (this.id === id) {
      if (!section)
        transition('slide.reset', true);

        if (app.scrollTo) {
          app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          global.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          clearTimeout(this.dismiss);
          this.dismiss = setTimeout(() => {
            dismiss();
            transition('slide', RESET_SLIDE);
          }, window.scrollY * 0.25);
        } else {
          app.scrollTop = 0;
          window.scroll(0, 0);
          dismiss();
          transition('slide', RESET_SLIDE);
        }
    } else {
      app.scrollTop = 0;
      window.scroll(0, 0);
      label = formatters.section(id);
      analytics.Section.Navigation.Click.track(label);
      transition('page.impression', false);

      if (source) {
        transition('analytics.sources', [['Section.Navigation.Click', label].join('|')]);
      } else {
        transition('analytics.sources', undefined);
      }
    }

    this.id = id;
  };

  render() {
    const preventDefault = e => e.preventDefault();
    const { scrollTo } = this;
    const update = (id, track) => () => scrollTo(id, track);

    return (
      <section className="nav">
        <div className="nav"/>
        <Progress />
        <nav>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>
          <div className="social">
            <a title="LinkedIn: Fox Zero™" href="https://www.linkedin.com/company/fox-zero" target="_blank">
              <i className="fa fa-linkedin-square"/>
            </a>
            <a title="GitHub: Fox Zero™" href="https://www.github.com/fox-zero" target="_blank">
              <i className="fa fa-github"/>
            </a>
            <a title="Facebook: @fox.zero.agency" href="https://www.facebook.com/fox.zero.agency" target="_blank">
              <i className="fa fa-facebook-official"/>
            </a>
            <a title="Instagram: @fox.zero.agency" href="https://www.instagram.com/fox.zero.agency" target="_blank">
              <i className="fa fa-instagram"/>
            </a>
            <a title="Twitter: @fox_zero_agency" href="https://twitter.com/fox_zero_agency" target="_blank">
              <i className="fa fa-twitter"/>
            </a>
          </div>
          <ul data-copyright={`© ${(new Date()).getFullYear()} · Fox Zero · A VitruvianTech Brand`}>
            <li className="home">
              <Link rel="nofollow" to="/" className="logo" onClick={update(DEFAULT_ID, true)}>
                <i className="fa fa-home"/>
              </Link>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-file-text-o"/> About</a>
              <ul>
                <li><Link rel="nofollow" to="/home/about" onClick={update(solutions[0].slug, true)}><i className="fa fa-flag"/> Mission</Link></li>
                <li><Link rel="nofollow" to="/home/agents" onClick={update(solutions[1].slug, true)}><i className="fa fa-id-badge"/> Agents</Link></li>
                <li><Link rel="nofollow" to="/home/squad" onClick={update(solutions[2].slug, true)}><i className="fa fa-fighter-jet"/> SQUAD<sup>®</sup></Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-cogs"/> Services</a>
              <ul>
                <li><Link rel="nofollow" to="/design" onClick={update('design', true)}><i className="fa fa-road"/> Design</Link></li>
                <li><Link rel="nofollow" to="/development" onClick={update('development', true)}><i className="fa fa-bullseye"/> Development</Link></li>
                <li><Link rel="nofollow" to="/support" onClick={update('support', true)}><i className="fa fa-wrench"/> Support</Link></li>
              </ul>
            </li>
            <li className="subnav products">
              <a href="#" onClick={preventDefault}><i className="fa fa-tags"/> Products</a>
              <ul>
                <li><Link rel="nofollow" to="/home/packages" onClick={update(solutions[3].slug, true)}><i className="fa fa-dollar" data-product="SQUAD®"><span>SQUAD<sup>®</sup></span></i> Packages</Link></li>
                <li><Link rel="nofollow" to="/home/warranty" onClick={update(solutions[4].slug, true)}><i className="fa fa-umbrella" data-product="Wingman™"><span>Wingman™</span></i> Warranty</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-question-circle"/> Help</a>
              <ul>
                <li><Link to="/home/contact" onClick={update(solutions[5].slug, true)}><i className="fa fa-phone"/> Contact Us</Link></li>
                <li><Link to="/privacy" onClick={update('privacy', true)}><i className="fa fa-user-secret"/> Privacy Policy</Link></li>
              </ul>
            </li>
            <li className="content subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-television"/> Content <span>Fox<br />Zero™<br/><span>TV</span></span></a>
              <ul>
                <li>
                  <Link to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018" onClick={update('stream.post')}>
                    <i className="fa fa-star"/> <marquee>Music, Tech, and Steven Tyler Collide in NOLA</marquee>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/stream" onClick={update('stream.home')}>
                    <i className="fa fa-exclamation"/> New
                  </Link>
                </li>
                <li>
                  <Link to="/stream/music" onClick={update('stream.category')}>
                    <i className="fa fa-hashtag"/> Music
                  </Link>
                </li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
