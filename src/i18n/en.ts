export default {
  buttons: {
    previous: {
      title: 'Previous'
    },
    next: {
      title: 'Next'
    },
    submit: {
      title: 'Submit'
    }
  },
  chapters: {
    c0: {
      title: 'Opening',
      subtitle: 'The vendor agreement',
      itemTitle: 'On this day, [signing date], there has been an agreement between:',
      item1: '{company} (hereinafter referred to as "first party"), domiciled in [office address], and',
      item2: '{vendor} (hereinafter referred to as "Second Party"), represented by [PIC name], domiciled in [vendor address],',
      item3: 'together hereinafter referred to as "the parties".',
      item4: '{people} thus agreed to bind itself in the vendor agreement ("agreement") as follows:',
      people: 'The Parties'
    },
    c1: {
      title: 'Chapter 1',
      subtitle: 'Scope of work',
      item1: 'The second party agrees to provide services/services/products as a contractor for the First Party.',
      item2: 'The second party is responsible for submitting the work or product in accordance with the provisions determined by the First Party.'
    },
    c2: {
      title: 'Chapter 2',
      subtitle: 'Tax provisions',
      item1: 'Each invoice/invoice submitted by the second party, if the second party is an individual (individual), it will be subject to cutting tax in PPh Article 21.',
      item2: 'If the second party is in the form of a business entity/company, it will be subject to cutting tax in PPh Article 23.',
      item3: 'The first party will issue proof of cutting (proof of tax cut) and send it to the second party within a period of 7 (seven) working days after the payment is made.'
    },
    c3: {
      title: 'Chapter 3',
      subtitle: 'Payment schedule',
      item1: 'The first party will make payments to the second party on the 5th (five) and 20 (twenty) every month.',
      item2: 'If the 5 (five) or 20 (twenty) on the national holiday or weekend, the payment will be processed on the next working day.',
      item3: 'Early payment (outside the schedule) can be considered case by case and requires the approval of FIRST PARTY MANAGEMENT.'
    },
    c4: {
      title: 'Chapter 4',
      subtitle: 'Anti-Kickback and Anti-Fraud',
      item1: 'The second party agreed not to provide rewards, prizes, or other forms of compensation directly or indirectly to employees or representatives of the first party.',
      item2: 'If there is evidence that the second party has given a kickback or is involved in any fraud (fraud), the first party has the right to take legal action in courts in Indonesia.',
      item3: 'The first party has a reward program to prevent fraud, where if the second party knows there is a request for kickback or fraud practice by employees of the first party, and can provide sufficient evidence, then the first party will provide a reward of Rp 10,000,000 (ten million rupiah) to the reporter.'
    },
    c5: {
      title: 'Chapter 5',
      subtitle: 'Second-Party Data',
      itemTitle: 'The Second Party must attach and/or include the following data:',
      item1: 'Full name (according to KTP).',
      item2: 'KTP number.',
      item3: 'NPWP number.',
      item4: 'Company name (if in the form of a business entity).',
      item5: 'PIC Name.',
      item6: 'Phone number.',
      item7: 'Email address (optional).',
      item8: {
        title: 'Bank account data.',
        item1: 'Back name.',
        item2: 'Account number.',
        item3: 'Account name.'
      }
    },
    c6: {
      title: 'Chapter 6',
      subtitle: 'The laws that occur and the settlement of dispute',
      item1: 'This agreement is regulated by and interpreted in accordance with applicable law in the Republic of Indonesia.',
      item2: 'If there is a dispute or dispute in connection with this agreement, the parties agree to resolve it in deliberation for consensus.',
      item3: 'If the deliberation does not reach an agreement, the dispute will be resolved through legal channels in the authorized court in Indonesia.'
    },
    c7: {
      title: 'Chapter 7',
      subtitle: 'Closing',
      item1: 'This agreement will take effect effectively from the date signed by the parties and will remain valid as long as it has not been ended by one of the parties with written notice in accordance with the provisions in the agreement.',
      item2: 'By signing this agreement, the second party stated that he had read, understanding, and approved the entire contents of the agreement without coercion from any party.',
      item3: 'Thus this agreement was made in 2 (two) copies, each with sufficient stamp and has the same legal force.'
    },
  },
  form: {
    personalInfo: {
      title: 'Personal Info',
      name: {
        label: 'Full Name (according to KTP)',
        placeholder: 'A complete name'
      },
      identity: {
        label: 'Identity Number / KTP',
        placeholder: '1234567890'
      },
      uploadIdentity: {
        label: 'Upload Identity Photo / KTP',
        placeholder: 'Click to upload'
      },
      tax: {
        label: 'NPWP Number',
        placeholder: '1234567890'
      },
      uploadTax: {
        label: 'Upload NPWP photos',
        placeholder: 'Click to upload'
      },
      whatsapp: {
        label: 'WhatsApp number',
        placeholder: '1234567890'
      }
    },
    companyInfo: {
      title: 'Company Info',
      name: {
        label: 'Company name',
        placeholder: 'Company name',
        hint: '(If the body is in the form of an effort)'
      },
      pic: {
        label: 'Person in charge / pic',
        placeholder: 'The name of the person in charge'
      },
      email: {
        label: 'Email address',
        placeholder: 'Email address',
        hint: '(optional)'
      }
    },
    bankInfo: {
      title: 'Bank Info',
      name: {
        label: 'Bank Name',
        placeholder: 'Please Select'
      },
      accountNumber: {
        label: 'Account Number',
        placeholder: '1234567890',
        suffix: 'Validate',
        errors: {
          notFound: 'Account information is not found, check again the data entered.'
        }
      },
      accountName: {
        label: 'Account Name',
      }
    },
    signature: {
      title: 'Contract signature',
      placeholder: 'Click for signature'
    },
    success: {
      title: 'Data was sent successfully',
      subtitle: 'The data has been received, our team will immediately review it.Monitor your email to find out the latest information, or don\'t hesitate to contact us if you have questions.'
    }
  }
}
