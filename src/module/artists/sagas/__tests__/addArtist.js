import {call, put} from 'redux-saga/effects';

import addArtist from '../addArtist';
import {addArtist as addArtistService} from '../../artistsService';
import {addArtistSuccess, addArtistFailure} from '../../artistsActions';
import {addSysMessage} from '../../../notifications/system/sysMessageAction';
import serverMessageHandler from '../../../../i18n/serverMessageHandler';
import {
  SYS_MESSAGE_TYPE_ERROR,
  SYS_MESSAGE_TYPE_INFO,
} from '../../../../config/general';
import {default as closeAddArtistDialogSaga} from '../closeAddArtistDialog';

describe('Add Artist', () => {
  const action = {
    payload: {
      firstName: 'Petar',
      middleName: 'Wonder',
      lastName : 'Even',
      consignor : true,
      active: true,
    },
  };
  const serverResponse = {
    response: {
      data: {
        artist: {
        },
      },
    },
    status: {
      code: 0,
    },
  };
  const serverError = {
    error: {
      messages: [
        {
          severity: 8,
          errorcode: 'AWM120',
        },
      ],
      status: {
        code: 8,
      },
    },
  };
  describe('Add Artist Success', () => {
    const generator = addArtist(action);
    it('Should call API', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(addArtistService, action.payload));
    });
    it('Should emit add artist action', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(
        put(addArtistSuccess(serverResponse.response.data.artist)),
      );
    });
    it('Should call saga to close dialog', () => {

      const next = generator.next(serverResponse);
      expect(next.value).toEqual(call(closeAddArtistDialogSaga));
    });
    it('Should add systemm message', () => {
      const next = generator.next(serverResponse);
      expect(next.value).toEqual(
        put(
          addSysMessage(
            'You have added artist successfully',
            SYS_MESSAGE_TYPE_INFO,
          ),
        ),
      );
    });
    it('Should be done', () => {
      const next = generator.next();

      expect(next.done).toBe(true);
    });
  });
  describe('Add artist Failure', () => {
    const generator = addArtist(action);
    generator.next(serverError);
    it('Should emit failure action', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(addArtistFailure()));
    });
    it('Shoud emit system message', () => {
      const next = generator.next(serverError);
      const errorMessage = serverMessageHandler(serverError.error);
      expect(next.value).toEqual(
        put(addSysMessage(errorMessage, SYS_MESSAGE_TYPE_ERROR)),
      );
    });
  });
});
