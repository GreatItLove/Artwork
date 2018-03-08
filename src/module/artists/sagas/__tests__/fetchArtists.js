import {call, put} from 'redux-saga/effects';

import fetchArtists from '../fetchArtists';
import {fetchArtists as fetchArtistsSevice} from '../../artistsService';
import {fetchArtistsSuccess, fetchArtistsFailure} from '../../artistsActions';
import {addSysMessage} from '../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../i18n/serverMessageHandler';
import {SYS_MESSAGE_TYPE_ERROR} from '../../../../config/general';

describe('Fetch Artist', () => {
  const action = {payload: {}};
  const serveDataMock = {
    response: {
      data: {
        
      },
    },
  };
  const serverError = {
    error: {
      messages: [
        {
          errorcode: 'AWM103',
          severity: 12,
        },
      ],
      status: {
        code: 12,
      },
    },
  };
  const generator = fetchArtists(action);

  describe('Fetch artists success', () => {
    it('Should call API', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(fetchArtistsSevice, action.payload));
    });

    it('Should emit success action', () => {
      const next = generator.next(serveDataMock);
      expect(next.value).toEqual(
        put(fetchArtistsSuccess(serveDataMock.response.data.Artists)),
      );
    });
  });
  describe('Fetch Artists failured', () => {
    const generator = fetchArtists(action);
    generator.next(serverError);
    it('Should emit add system message', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(
        put(
          addSysMessage(
            serverMessageHandler(serverError.error),
            SYS_MESSAGE_TYPE_ERROR,
          ),
        ),
      );
    });
    it('Should emit fetch user failure action', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(fetchArtistsFailure()));
    });
  });
});
