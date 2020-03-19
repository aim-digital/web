import {Category} from '@boilerplatejs/core/lib/GoogleAnalytics';

export const Section = new Category('Section', [
  { source: 'App', actions: ['Click'] },
  { source: 'Navigation', actions: ['Click'] },
  { source: 'Header', actions: ['Impression', 'Click'] },
  { source: 'Page', actions: ['Impression', 'Click'] },
  { source: 'Detail', actions: ['Impression', 'Link'] }
]);

export const Form = new Category('Form', [
  { source: 'Page', actions: ['Impression', 'Submission', 'Success', 'Failure'] },
  { source: 'Detail', actions: ['Submission', 'Success', 'Failure'] }
]);

export const Confirmation = new Category('Confirmation', [
  { source: 'Page', actions: ['Impression', 'Booking', 'Share', 'Reset'] },
  { source: 'Detail', actions: ['Impression', 'Booking', 'Share', 'Reset'] }
]);