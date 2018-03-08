const messages = {
  en: {
    auth: {
      login: {
        formHeader: 'Login',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        forgotPassword: 'Forgot Password?',
        register: 'Register',
        startPageField: 'Start Page',
        startPageOption: {
          home: 'Home Page',
          artists: 'Artists',
          consignments: 'Consignments',
          artwork: 'Artwork',
          artworkAddWizard: 'Artwork (Add Wizard)',
          contacts: 'Contacts',
          contactsAddWizard: 'Contacts (Add Wizard)',
          websiteSection: 'Website Section',
          exhibitions: 'Exhibitions',
          resources: 'Resources',
          invoices: 'Invoices',
          quickSale: 'Quick Sale',
          visitorToday: 'Visitor Today',
          surveyResults: 'Survey Results'
        },
        submitBtn: 'Sign in'
      },
      passwordForget: {
        submitBtn: 'Send password reset email',
        formHeader: 'Forgot password?',
        headerInfo: 'Enter your email address and we will send you a link to reset your password',
        email: {
          field: 'Email',
          errorRequired: 'Required'
        },
        backToLogin: 'Back to Login'
      },
      passwordReset: {
        submitBtn: 'Reset Password',
        formHeader: 'Reset password',
        headerInfo: 'Please enter and confirm new password',
        newPassword: {
          field: 'New Password'
        },
        confirmPassword: {
          field: 'Confirm Password'
        },
        backToLogin: 'Back to Login'
      }
    },
    app: {
      menuItems: {
        dashboard: 'Dashboard',
        logout: 'Logout'
      }
    },
    account: {
      editAccount: {
        title: 'Edit account',
        fullNameLabel: 'Your full name',
        loginLabel: 'Email/Login',
        changePasswordLabel: 'Change Password',
        oldPasswordLabel: 'Old Password',
        newPasswordLabel: 'New Password',
        confirmPasswordLabel: 'Confirm Password',
        submitButtonLabel: 'Submit',
        nothingForUpdateMessage: 'There is nothing to update',
        transfer: 'Transfer',
        siteAdmin: 'Site Administrator'
      }
    },
    validation: {
      required: 'Required',
      invalidEmail: 'Email is not valid',
      notMatch: ' {{field1}} does not match the {{field2}}',
      maxLength: 'The maxim length of {{fieldName}} can be {{maxLength}}',
      invalidDate: 'Date is not valid format'
    },
    users: {
      users: 'Users',
      filter: {
        searchUsers: 'Search Users',
        filter: 'Filter',
        active: 'Active',
        userLevel: 'User Level',
        userType: 'User Type',
        results: 'Results',
      },
      columns: {
        name: 'NAME',
        email: 'EMAIL',
        type: 'TYPE',
        level: 'LEVEL',
        active: 'ACTIVE',
        lastLoggedin: 'LAST LOGGED IN',
      },
      download: {
        title: 'Export users',
      },
    },
    contacts: {
      contacts: 'Contacts',
      filter: {
        searchContacts: 'Search Contacts',
        filter: 'Filter',
        results: 'Results',
        contactType: 'Contact Type',
        isCompleteMailList: 'Active Email',
        category: 'Category',
      },
      columns: {
        name: 'NAME',
        email: 'EMAIL',
        phone: 'PHONE',
        address: 'ADDRESS',
        marketing: 'MARKETING',
        spent: 'SPENT',
        qb: 'QUICK BOOKS',
        contactYype: 'CONTACT TYPE',
        imported: 'IMPORTED',
        bulkEmail: 'BULK EMAIL',
      },
      bulkedits: {
        comment: 'Check contacts for bulk edits:',
        valid: 'Valid',
        invalid: 'Invalid',
        mailList: 'Mail List',
        nonMailList: 'Non-MailList',
        emailList: 'General-MailList',
        delete: 'Delete',
        customerType: 'Customer Type',
        category: 'Category',
        howFound: 'How Found',
        specialInterest: 'Special Interest',
      },
      download: {
        title: 'Export contacts',
      },
    },
    invoices: {
      invoices: 'Invoices',
      filter: {
        searchInvoices: 'Search Invoices',
        filter: 'Filter',
        results: 'Results',
        fromDate: 'From Date',
        toDate: 'To Date',
        refinedDate: 'Date Type',
      },
      columns: {
        invoice: 'INVOICE',
        ordered: 'ORDERED',
        customerName: 'CUSTOMER NAME',
        paidFull: 'PAID FULL',
        taxTotal: 'TAX TOTAL',
        ship: 'SHIP',
        amount: 'AMOUNT',
        balance: 'BALANCE',
        status: 'STATUS',
        paymentInfo: 'PAYMENT INFO',
      },
      bulkedits: {
        delete: 'Delete',
        comment: 'Check invoices for bulk edits:',
      },
      download: {
        title: 'Export Invoices',
      },
    },
    artists: {
      artists: 'Artists',
      columns: {
        name: 'NAME',
        art: 'ART',
        icon: 'ICON',
        genre: 'GENRE',
        cmsn: 'CMSN',
        taxNumber: 'TAX ID',
        featured: 'FEAUTRED',
        active: 'ACTIVE'
      },
      download: {
        title: 'Export artists',
      },
      bulkedits: {
        comment: 'Check artists for bulk edits:',
        active: 'Active',
        inactive: 'Inactive',
        featured: 'Featured',
        unfeatured: 'Unfeatured'
      },
      filter: {
        searchArtists: 'Search Artists',
        filter: 'Filter',
        results: 'Results',
        active: 'Active',
        featured: 'Featured',
        genre: 'Genre',
        artworkCount: 'Artwork Count'
      },
      edit: {
        basics: 'BASICS',
        seo: 'SEO',
        stats: 'STATS',
        agreement: 'AGREEMENT',
        commissions: 'COMMISSIONS',
        returns: 'RETURNS',
        cvdocs: 'CV/DOCS',
        displays: 'DISPLAYS',
        labels: 'LABELS',
        artwork: 'ARTWORK',
        firstName: 'First name',
        middle: 'Middle',
        lastName: 'Last name',
        reviewContactInformation: 'Review Contact Information',
        consignor: 'Consignor',
        active: 'Active',
        inactive: 'Inactive',
        sold: 'Sold',
        total: 'TOTAL',
        submit: 'Submit',
        consignorType: 'Consignor Type',
        commission: 'Commission',
        maxDiscount: 'Max Discount',
        consignorsVat: 'Consignors VAT',
        agreementInfo: 'Agreement',
        inventory: 'Inventory',
        seoSuggestion: 'SEO Suggestions',
        keywords: 'Keywords',

        basic: {
          title: 'Basics',
          options: 'Options',
          featuredArtist: 'Featured Artist:',
          nonArtist: 'Non-Artist:',
          taxFree: 'Tax-Free:',
          genre: 'Genre',
          addNewGenre: 'Add a New Genre',
          category: 'Category',
          addNewCategory: 'Add a New Category',
          dateStart: 'Date Start',
          dateEnd: 'Date End',
          discipline: 'Discipline',
          birthDate: 'Birth Date',
          birthPlace: 'Birth Place',
          deceased: 'Deceased',
          website: 'Website',
          displaysOnWebsite: 'Displays on website',
          save: 'SAVE',
          genwizrd: 'Gene Wizard',
          hint: {
            featured: {
              header: "Featured Artist",
              body: "Artists who are Featured may be grouped on various web pages, such as the Home page, depending on which template you may be using. Contact Support for more options."
            },
            nonArtist: {
              header: "Non-Artist",
              body: "YES, will hide from Artists main page on Website and is treated much like a product Category. Set to YES for things like \"Books, Gifts, etc\". Once you've added artwork, it may be added to your navigation links on Website independently from your Artists main page."
            },
            taxFree: {
              header: "Tax Free",
              body: "Tax Free artists are not susceptible to taxation with either Website Ecommerce OR Retail Invoicing. Tax Free artists are typically \"Non-Artists\"."
            }
          }
        },
        cvdoc: {
          title: 'Artist CV/Documents',
          tab: {
            description: 'Description',
            biography: 'Biography',
            resume: 'Resume',
            statement: 'Statement',
            pressRelease: 'Press Release',
            articles: 'Related Articles',
          },
          document: 'Document : ',
          fileDragandDrop: 'To attach files drag & drop here or ',
          selectFilesPC: 'select files from your computer...',
          or: 'Or',
          selectMediaLibrary: 'select files from Media Library...',
          hint: {
            description: {
              header: "Description",
              body: "This should be written from the gallery's perspective and is a good way to improve search engine placement with descriptive text describing the Artist.\nNOTE:  iFrames may not be embedded into the editor.  However, you may insert a link using this editor to your Videos page on your website."
            },
            biography: {
              header: "Biography",
              body: "The artist's biography. You have three options: <br/>1. Copy/paste literal text. \n2. Copy/paste text in HTML Format. \n3. Upload a document (.pdf/.doc).\nNOTE:  iFrames may not be embedded into the editor.  However, you may insert a link using this editor to your Videos page on your website."
            },
            taxFree: {
              header: "Tax Free",
              body: "Tax Free artists are not susceptible to taxation with either Website Ecommerce OR Retail Invoicing. Tax Free artists are typically \"Non-Artists\"."
            }
          }
        }
      }
    }
  }
};

export default messages;
