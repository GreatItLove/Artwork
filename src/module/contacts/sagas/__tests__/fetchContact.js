import { call, put } from 'redux-saga/effects';
import fetchContact from '../fetchContact';
import { fetchContact as fetchContactService } from '../../contactServices';
import { fetchContactSuccess, fetchContactFailure } from '../../contactActions';
import serverMessageHandler from '../../../../i18n/serverMessageHandler';
import { addSysMessage } from '../../../notifications/system/sysMessageAction';
import { SYS_MESSAGE_TYPE_ERROR } from '../../../../config/general';

describe('Fetch Contact', () => {
  const action = { payload: {} };
  const serverData = {
    response: {
      data: {
        contacts: [
          {
            active: true,
            address: '',
            address2: '',
            altAddress: '',
            altAddress2: '',
            altCity: '',
            altEMail: '',
            altFax: '',
            altPhone: '',
            altPhone2: '',
            altState: '',
            altZip: '',
            artistsId: 0,
            artistsList: true,
            beq: false,
            birthday: '',
            buyer: false,
            buyerList: '',
            category: 'ContactUs',
            cell: '',
            city: '',
            company: '',
            consignorId: 0,
            contactName: '',
            contactPhone: '',
            contactType: '',
            country: '',
            customerId: 4104,
            customerType: 'Website_Contact',
            dateAdded: '1416237829',
            dateReg: '1416237829',
            dateUnSubscribed: '',
            dateUpdated: '1416237829',
            dateViewedBE: '',
            done: false,
            email: 'vangoghbuptert@outlook.com',
            emailList: false,
            fax: '',
            firstName: '',
            grossSpent: '0',
            howFound: '',
            importDate: '',
            invited: false,
            isArtist: false,
            isConsignee: false,
            isConsignor: false,
            isContributor: false,
            lastName: '',
            maId: 1859,
            mailList: false,
            marketing: 'Website_Contact,ContactUs',
            middle: '',
            phone: '',
            phone2: '',
            private: false,
            qb: false,
            qbChangeDate: '',
            qualities: '',
            region: '',
            role: '',
            salespersonId: 0,
            salutation: '',
            specialInterest: '',
            specialList: true,
            state: '',
            subscribeList: '',
            url: '',
            valid: true,
            zip: '',
          },
        ],
      },
      pagination: {
        totalPages: 261,
        totalRecordCount: 261,
        recordsPerPage: 1,
        currentPage: 1,
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
  const generator = fetchContact(action);
  describe('Fetch contact success', () => {
    it('Should call API', () => {
      const next = generator.next();
      expect(next.value).toEqual(call(fetchContactService, action.payload));
    });
    it('Should emit success action', () => {
      const next = generator.next(serverData);
      expect(next.value).toEqual(
        put(
          fetchContactSuccess({
            contacts: serverData.response.data.contacts,
            pagination: serverData.response.pagination,
          })
        )
      );
    });
  });
  describe('Fetch Contact Failure', () => {
    const generator = fetchContact(action);
    generator.next(serverError);
    it('Should emit system message', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(addSysMessage(serverMessageHandler(serverError.error), SYS_MESSAGE_TYPE_ERROR)));
    });
    it('Should emit fetch contact failure action', () => {
      const next = generator.next(serverError);
      expect(next.value).toEqual(put(fetchContactFailure()));
    });
  });
});
