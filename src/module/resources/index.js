import ArtistsLit from '../artists/ArtistsLit';
import ArtworkList from './artwork/ArtworkList';
import ConsignmentsList from './consignments/ConsignmentsList';
import ContactsList from '../contacts/ContactsList';
import InvoicesList from '../invoices/InvoiceList';
import ReportsList from './reports/ReportsList';
import MarketingList from './marketing/MarketingList';
import WebsiteList from './website/WebsiteList';
import MediaLibrary from './media/MediaLibrary';

import * as routesConstants from '../../config/routesPatch';

const resources = [
  {
    name: routesConstants.ARTISTS_PATH,
    options: { label: 'Artists' },
    icon: 'group',
    list: ArtistsLit
  },
  {
    name: routesConstants.ARTWORK_PATH,
    options: { label: 'Artwork' },
    icon: 'color_lens',
    list: ArtworkList
  },
  {
    name: routesConstants.CONSIGNMENTS_PATH,
    options: { label: 'Consignments' },
    icon: 'local_shipping',
    list: ConsignmentsList
  },
  {
    name: routesConstants.CONTACTS_PATH,
    options: { label: 'Contacts' },
    icon: 'contact_mail',
    list: ContactsList
  },
  {
    name: routesConstants.INVOICES_PATH,
    options: { label: 'Invoices' },
    icon: 'payment',
    list: InvoicesList
  },
  {
    name: routesConstants.REPORTS_PATH,
    options: { label: 'Reports' },
    icon: 'insert_chart',
    list: ReportsList
  },
  {
    name: routesConstants.MARKETING_PATH,
    options: { label: 'Marketing' },
    icon: 'public',
    list: MarketingList
  },
  {
    name: routesConstants.WEBSITES_PATH,
    options: { label: 'Website' },
    icon: 'web',
    list: WebsiteList
  },
  {
    name: routesConstants.MEDIA_LIBRARY,
    options: { label: 'Media Library' },
    icon: 'video_library',
    list: MediaLibrary
  }
];

export default resources;
