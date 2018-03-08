import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import updateObject from '../../utility/updateObject';
import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  CHECK_ARTISTS,
  UNCHECK_ARTISTS,
  UPDATE_SEARCH_FILTER,
  ADD_ARTIST_REQUEST,
  ADD_ARTIST_SUCCESS,
  ADD_ARTIST_FAILURE,
  OPEN_ARTIST_ADD_DIALOG,
  CLOSE_ARTIST_ADD_DIALOG,
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE,
  SWITCH_ARTIST_FILTER,
  BULK_ARTIST_EDIT_REQUEST,
  BULK_ARTIST_EDIT_FAILURE,
  BULK_ARTIST_EDIT_SUCCESS,
  GET_ARTIST_INFO_REQUEST,
  GET_ARTIST_INFO_SUCCESS,
  GET_ARTIST_INFO_FAILURE,
  PATCH_ARTIST_REQUEST,
  PATCH_ARTIST_SUCCESS,
  PATCH_ARTIST_FAILURE,
  EDITOR_STATE_CHANGE,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  ARTIST_DOWNLOAD_PATH_REQUEST,
  ARTIST_DOWNLOAD_PATH_SUCCESS,
  ARTIST_DOWNLOAD_PATH_FAILURE,
  OPEN_ARTIST_DOWNLOAD_DIALOG,
  CLOSE_ARTIST_DOWNLOAD_DIALOG,
} from './artistsConstants';

function htmlToDraftState(html) {
  if (!html) return EditorState.createEmpty()
  const blocksFromHtml = htmlToDraft(html)
  if (blocksFromHtml) {
    const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
    return EditorState.createWithContent(contentState)
  }
  return EditorState.createEmpty()

}

function artists(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ARTISTS_REQUEST:
      return updateObject(state, { fetching: true, list: [] });

    case FETCH_ARTISTS_SUCCESS:
      return updateObject(state, {
        fetching: false,
        list: payload,
        pagination: action.page
          ? action.page
          : {
            ...state.pagination,
            totalRecordCount: 0,
          },
      });

    case FETCH_ARTISTS_FAILURE:
      return updateObject(state, { fetching: false });

    case CHECK_ARTISTS:
      var value = state.selectedCheckBox.slice()
      value.push(payload)
      return updateObject(state, { selectedCheckBox: value })

    case UNCHECK_ARTISTS:
      return updateObject(state, { selectedCheckBox: state.selectedCheckBox.filter(item => item !== payload) })

    case UPDATE_SEARCH_FILTER:
      return updateObject(state, { searchFilter: payload })

    case OPEN_ARTIST_ADD_DIALOG:
      return updateObject(state, { adding: true });
    case CLOSE_ARTIST_ADD_DIALOG:
      return updateObject(state, { adding: false });

    case ADD_ARTIST_REQUEST:
      return updateObject(state, { loading: true });

    case ADD_ARTIST_SUCCESS:
      return updateObject(state, {
        list: [...state.list, ...[payload]],
        loading: false
      });

    case ADD_ARTIST_FAILURE:
      return updateObject(state, { loading: false });

    case FETCH_GENRES_REQUEST:
      return updateObject(state, { fetchingGenres: true });

    case FETCH_GENRES_SUCCESS:
      return updateObject(state, { fetchingGenres: false, genres: payload });

    case FETCH_GENRES_FAILURE:
      return updateObject(state, { fetchingGenres: false });

    case SWITCH_ARTIST_FILTER:
      return updateObject(state, { showingFilter: !state.showingFilter })

    case BULK_ARTIST_EDIT_REQUEST:
      return updateObject(state, { fetching: true })

    case BULK_ARTIST_EDIT_SUCCESS:
    case BULK_ARTIST_EDIT_FAILURE:
      return updateObject(state, { fetching: false })

    case GET_ARTIST_INFO_REQUEST:
      return updateObject(state, { fetchingArtistInfo: true })

    case GET_ARTIST_INFO_SUCCESS:
      return updateObject(state, {
        fetchingArtistInfo: false, artistInfo: payload,
        editorState_description: htmlToDraftState(payload.description),
        editorState_biography: htmlToDraftState(payload.biography),
        editorState_resume: htmlToDraftState(payload.resume),
        editorState_statement: htmlToDraftState(payload.statement),
        editorState_pressRelease: htmlToDraftState(payload.pressRelease),
        editorState_articles: htmlToDraftState(payload.artists),
      })

    case GET_ARTIST_INFO_FAILURE:
      return updateObject(state, { fetchingArtistInfo: false })

    case PATCH_ARTIST_REQUEST:
      return updateObject(state, { loading: true })

    case PATCH_ARTIST_SUCCESS:
      var newStatelist = state.list.map(item => {
        if (item.artistsId === state.artistInfo.artistsId) {
          item = { ...item, ...payload }
        }
        return item;
      })
      return updateObject(state, {
        loading: false,// artistInfo: payload,
        list: newStatelist,
        artistInfo: { ...state.artistInfo, ...payload },
        editorState_description: htmlToDraftState(payload.description),
        editorState_biography: htmlToDraftState(payload.biography),
        editorState_resume: htmlToDraftState(payload.resume),
        editorState_statement: htmlToDraftState(payload.statement),
        editorState_pressRelease: htmlToDraftState(payload.pressRelease),
        editorState_articles: htmlToDraftState(payload.artists),
      })
    case PATCH_ARTIST_FAILURE:
      return updateObject(state, { loading: false })

    case EDITOR_STATE_CHANGE:
      return updateObject(state, { [`editorState_${action.field}`]: action.state })

    case FETCH_CATEGORIES_REQUEST:
      return updateObject(state, { fetchingGenres: true });

    case FETCH_CATEGORIES_SUCCESS:
      return updateObject(state, { fetchingGenres: false, categories: payload });

    case FETCH_CATEGORIES_FAILURE:
      return updateObject(state, { fetchingGenres: false });

    case ARTIST_DOWNLOAD_PATH_REQUEST:
      return updateObject(state, { fetchingDownloadpath: true })
    case ARTIST_DOWNLOAD_PATH_SUCCESS:
      return updateObject(state, {
        fetchingDownloadpath: false,
        downloadPath: payload.downloadFilePath,
      });
    case ARTIST_DOWNLOAD_PATH_FAILURE:
      return updateObject(state, { fetchingDownloadpath: false })
    case OPEN_ARTIST_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: true })
    case CLOSE_ARTIST_DOWNLOAD_DIALOG:
      return updateObject(state, { downloading: false })
    default:
      return state;
  }
}

export default artists;
