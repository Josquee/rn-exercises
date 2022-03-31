import ContactsScreenNavigator from '../navigators/ContactsScreenNavigator'
import FavoritesScreenNavigator from '../navigators/FavoritesScreenNavigator'
import ProfileScreenNavigator from '../navigators/ProfileScreenNavigator'

const TABS = [
  {
    name: 'Contact list',
    component: ContactsScreenNavigator,
    defaultIcon: 'list',
    showHeader: false
  },
  {
    name: 'Favorites',
    component: FavoritesScreenNavigator,
    defaultIcon: 'star-rate',
    showHeader: true
  },
  {
    name: 'Profile',
    component: ProfileScreenNavigator,
    defaultIcon: 'person',
    showHeader: true
  }
]

export default TABS
