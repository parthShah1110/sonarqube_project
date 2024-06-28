import moment from 'moment';

export const dateFormatter = (date = '') => {
  if (date !== '') {
    return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
  } else {
    return date;
  }
};
