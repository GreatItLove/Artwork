import { EditorState } from 'draft-js';
import jwt from './jwtStorage';
import selection from './selectionStorage';

let initialAuth = {
  loading: false,
  startPage: null,
  token: false
};

let initialAccount = {
  active: null,
  email: false,
  fullName: false,
  userId: false,
  userType: false,
  loadingData: false,
  loadingError: false,
  isFetchedData: false,
  isTransfer: false
};

let initialCustomer = {
  active: null,
  customerId: null,
  customerType: null,
  email: null,
  logo3: null,
  logoIpad: null,
  organization: null,
  phone: null,
  siteAdministrator: null
};

let initialSettings = {
  bodyName: null,
  curFormat: null,
  dimFormat: null,
  folderName: null,
  ipadUsers: null,
  url: null,
  uses3: null
};
const initialUsers = {
  list: [],
  fetching: false,
  loading: false,
  deleting: false,
  adding: false,
  changingActive: false,
  editing: false,
  resettingPassword: false,
  pagination: {},
  searchFilter: {},
  showingFilter: false,
  fetchingDownloadpath: false,
  downloadPath: '',
  downloading: false,
};

const initialNews = {
  newsData: null,
  newsLoading: true,
  newsError: ''
};

const initialLogs = {
  logsData: [],
  logsLoading: true,
  logsError: ''
};

const initialArtists = {
  list: [],
  pagination: 0,
  selectedCheckBox: [],
  searchFilter: {},
  fetching: false,
  loading: false,
  deleting: false,
  adding: false,
  changingActive: false,
  editing: false,
  resettingPassword: false,
  genres: [],
  categories: [],
  fetchingGenres: false,
  showingFilter: false,
  fetchingArtistInfo: false,
  artistInfo: {},
  editorState_description: EditorState.createEmpty(),
  editorState_biography: EditorState.createEmpty(),
  editorState_resume: EditorState.createEmpty(),
  editorState_statement: EditorState.createEmpty(),
  editorState_pressRelease: EditorState.createEmpty(),
  editorState_articles: EditorState.createEmpty(),
  fetchingDownloadpath: false,
  downloadPath: '',
  downloading: false,
};
const initialContact = {
  list: [],
  category: [],
  adding: false,
  updating: false,
  pagination: 0,
  loading: false,
  fetching: false,
  searchFilter: {},
  showingFilter: false,
  fetchingCategory: false,
  bulkUpdateDialogData: {},
  selectedCheckBox: [],
  specialInterest: [],
  howFound: [],
  customerTypes: [],
  fetchingDownloadpath: false,
  downloadPath: '',
  downloading: false,
};
const initialInvoice = {
  list: [],
  pagination: {
    currentPage: 1,
    recordsPerPage: "25",
    totalPages: 0,
  },
  fetching: false,
  searchFilter: {},
  showingFilter: false,
  selectedCheckBox: [],
  fetchingDownloadpath: false,
  downloadPath: '',
  downloading: false,
};
const isStorageDataExist = jwt.exists();
if (isStorageDataExist) {
  const storageData = jwt.getJWT();
  initialAuth = { ...initialAuth, ...storageData };
}

const isSelectionDataExist = selection.exists();
if (isSelectionDataExist) {
  const storageData = selection.getSelection();
  initialAuth = { ...initialAuth, startPage: storageData };
}
let initialState = {
  auth: initialAuth,
  account: initialAccount,
  customer: initialCustomer,
  settings: initialSettings,
  sysMessage: {
    message: '',
    messageType: ''
  },
  users: initialUsers,
  artists: initialArtists,
  news: initialNews,
  logs: initialLogs,
  contact: initialContact,
  invoice: initialInvoice,
};

export default initialState;
