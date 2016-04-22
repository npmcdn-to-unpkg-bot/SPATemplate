import {fromJS} from 'immutable';

const Contact = (state = fromJS({
  Headline:'',
  Subheadline:'',
  Paragraph: '',
  Address: {
    text: '',
    link: ''
  },
  Email:{
    text: '',
    link: ''
  },
  Mobile:{
    text: '',
    link: ''
  }
}), action)=>{
  switch (action.type) {
    case 'INIT_CONTACT':
      return state.set('Headline', action.Headline)
                .set('Subheadline', action.Subheadline)
                .set('Paragraph', action.Paragraph)
                .set('Address', action.Address)
                .set('Email', action.Email)
                .set('Mobile', action.Mobile);
    default:
      return state;
  }
};

export default Contact;
