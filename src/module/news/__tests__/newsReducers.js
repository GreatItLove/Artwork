import newsReducers from '../newsReducers';
import initialState from '../../../store/initialState';
import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } from '../newsActions';

const newsData = {
  news: [
    {
      active: true,
      altTag: '',
      headLiner: true,
      homePage: '1',
      linkName: '',
      markPer: false,
      newsDate: '1499299200',
      newsDescription: `Consignment Forms (Agreements) are designed to work dynamically with the Consignor Settings (.e.g, Commission, Max Discount, etc).  \r\n<p>\r\n<b>BIG PICTURE:  </b>  \r\n<br>\r\nPrint, mail and archive solid consignment agreements for all your artists/consignors effortlessly.\r\n<p>\r\n<b>HOW IT WORKS:</b>\r\n<br>\r\nOnce you make an artist a consignor go to the Artist's Agreement Tab to generate agreement.\r\n<p>\r\n<b>Settings</b><Br>\r\nUpdate the following settings:\r\n<ul>\r\n<li>Commission (%): Affects the amount due consignor upon a sale.\r\n<li>Max. Discount (%): \tIf the gallery gives a buyer discount at the point of sale, the consignor consequently gets less of a commission. The \"Maximum Discount __ %\" is designed as to ensure a consignor does not share the discount beyond a certain point. For example, if a consignor were to use a Max. Discount of 0%, their cut would be not be affected regardless the discount to the buyer. On the other hand, if the consignor's Max. Discount were set to 20% then the consignor would effectively share any discount to buyer up to 20%. If the purchase discount were more than that, the consignor would not affected beyond this example's 20% as defined by the Maximum Discount.\r\n<li>Insure Percent (%): Amount gallery insures the artist's artwork for.\r\n<li>Pay Day: How many days after being paid by customer, the consignor should be sent payment. \r\n<li>Type: Artist or Consignor\r\n<li>Consignors VAT: Artist/Consignor specific VAT according to their country's authorities. \r\n<li>Pack/Ship - To/From: YES or NO\r\n<li>Start Date: Agreement Start Date\r\n<li>End Date: Agreement End Date\r\n<li>Internal Notes: Notes are not seen by consignor.\r\n</ul>\r\n<img src=\"http://www.managedartwork.net/Images/ConsignorAgreementSettings.jpg \" border=\"0\" width=\"600\" height=\"408\" alt=\"Consignment Settings\">\r\n<p>\r\nThese settings are used throughout the Artwork Manager. If you update any of these settings, you should re-generate the TERMS. \r\nOnce you edit these settings click SAVE. \r\n<p>\r\n<b>Terms</b>\r\n<br>There is a fairly standard yet comprehensive default legal document that defines your mutual understandings with the Consignor.  The beauty in the settings are automatically embedded into nicely worded terms.  These terms may be edited if you see fit, allowing you have a unique agreement for every Consignor if you choose to do so. Once completed click the SAVE button below Terms.\r\n<img src=\"http://www.managedartwork.net/Images/Terms1.jpg\" border=\"0\" width=\"600\" height=\"471\" alt=\"Terms\">\r\n<p>Now you will see the Printer and PDF icons that allow you to print a master agreement that covers ALL current inventory by this Consignor. \r\n\r\n<p>\r\n<b>Artwork covered by this agreement</b><br>\r\nTo include a list of Artworks Covered by this Agreement, look towards the bottom of the page, where you can check which artworks to associate with this Agreement. Click SAVE again to update the review the Agreement.\r\n<img src=\"http://www.managedartwork.net/Images/ArtworkCovered1.jpg\" border=\"0\" width=\"600\" height=\"131\" alt=\"Artwork Covered\">\r\n<p>Your completed agreement will look something like this:\r\n<img src=\"http://www.managedartwork.net/Images/ConsignmentAgreementPDF.jpg \" border=\"0\" width=\"600\" height=\"627\" alt=\"ConsignmentAgreementPDF\">\r\n<p>`,
      newsDocument: '',
      newsGroup: 'How To',
      newsId: 167,
      newsImage: '',
      newsLoginPicture: '167Login.jpg',
      newsLoginTeaser: `Click here to learn how to create Consignment Agreements for your Artists and Consignors.  Choose your settings, click a few boxes, and in little time have agreements ready for print or email...`,
      newsTeaser: `Click here to learn how to create Consignment Agreements for your Artists and Consignors.  Choose your settings, click a few boxes, and in little time have agreements ready for print or email...`,
      newsThump: '167Thumb.jpg',
      newsTitle: 'HOW TO | Create a Consignment Agreement',
      newsURL: '',
      sectionHeadLiner: false,
      sequence: 1,
      solution: 'Gallery'
    }
  ]
};
const newsInit = initialState.news;

describe('News Reducer', () => {
  describe('News', () => {
    it('Should has proper state after fetchNewsRequest action', () => {
      const data = { limit: 1 };
      const newState = newsReducers(newsInit, fetchNewsRequest(data));
      const expectedState = { ...newsInit };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after fetchNewsSuccess state', () => {
      const newState = newsReducers(newsInit, fetchNewsSuccess(newsData));
      const expectedState = {
        newsData: newsData[0],
        newsLoading: false,
        newsError: ''
      };
      expect(newState).toEqual(expectedState);
    });
    it('Should has proper state after fetchNewsFailure action ', () => {
      const prevState = {
        ...newsInit,
        newsLoading: true
      };
      const newState = newsReducers(prevState, fetchNewsFailure('err'));
      expect(newState).toEqual({
        newsData: null,
        newsLoading: false,
        newsError: 'err'
      });
    });
  });
});
