import {combineReducers, createStore} from 'redux';
import {fromJS} from 'immutable';

import Seo from './Components/Seo';
import Menu from './Components/Menu';
import Featured from './Components/Featured';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Foot from './Components/Foot';

const reducer = combineReducers({
  Seo: Seo,
  Menu: Menu,
  Featured: Featured,
  Profile: Profile,
  Contact: Contact,
  Foot: Foot
});

const Store = createStore(reducer);

Prismic.api('https://template.prismic.io/api')
  .then((api)=>api.query(Prismic.Predicates.at('my.index.uid', 'index')))
  .then(({results})=>{
    console.log(results[0].data);

    //Seo
    Store.dispatch({
      type: 'INIT_SEO',
      Title: fromJS(results[0].data['index.PageTitle'].value),
      Description: fromJS(results[0].data['index.PageDescription'].value)
    });

    //Featured
    Store.dispatch({
      type:'INIT_FEATURED',
      Link: fromJS(results[0].data['index.Search MLS'].value.url),
      Properties: fromJS(results[0].data['index.Properties'].value)
    });

    //Profile
    Store.dispatch({
      type: 'INIT_PROFILE',
      poster: fromJS(results[0].data['index.BackgroundImage'].value.main.url),
      name: fromJS(results[0].data['index.Name'].value),
      paragraph: fromJS(results[0].data['index.Paragraph'].value),
      pic: fromJS(results[0].data['index.Profile Pic'].value.main.url)
    });

    //Contact
    Store.dispatch({
      type: 'INIT_CONTACT',
      Headline: fromJS(results[0].data['index.botHeading'].value),
      Subheadline: fromJS(results[0].data['index.botSubHeading'].value),
      Paragraph: fromJS(results[0].data['index.botParagragh'].value),
      Address: fromJS({
        link: fromJS(results[0].data['index.AddressLink'].value.url),
        text: fromJS(results[0].data['index.Address'].value)
      }),
      Email: fromJS({
        link: fromJS(results[0].data['index.EmailLink'].value.url),
        text: fromJS(results[0].data['index.Email'].value)
      }),
      Mobile: fromJS({
        link: fromJS(results[0].data['index.MobileLink'].value.url),
        text: fromJS(results[0].data['index.Mobile'].value)
      })
    });

    //Foot
    Store.dispatch({
      type: 'INIT_FOOT',
      Copyright: fromJS(results[0].data['index.Copyright'].value),
      Information: fromJS(results[0].data['index.Information'].value),
      Developer: fromJS(results[0].data['index.Developer'].value),
      Facebook: fromJS(results[0].data['index.facebook'].value.url),
      Twitter: fromJS(results[0].data['index.Twitter'].value.url),
      Instagram: fromJS(results[0].data['index.Instagram'].value.url)
    });

  });

export default Store;
