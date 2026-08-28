export const demoData = Object.freeze({
  applicant:{name:'Aarav Mehta',firstName:'Aarav',lastName:'Mehta',dob:'14/08/2006',gender:'Male',mobile:'+91 98XXXXXX42',email:'aarav.demo@example.in',aadhaarMasked:'XXXX XXXX 9012',aadhaarDemo:'1234 5678 9012',otp:'749126',fatherName:'Rohit Mehta',bloodGroup:'B+'},
  address:{line1:'42, Sample Residency',locality:'Rohini',district:'North West Delhi',state:'Delhi',pincode:'110085'},
  application:{number:'DL-LL-2026-081452',reference:'SAR-DEMO-81452026',rto:'DL-11 Rohini Zonal Office',route:'Faceless online route',vehicle:'Motorcycle without gear',fee:'₹275.00'},
  payment:{transaction:'DEMO-TXN-28082619',date:'28/08/2026, 14:32',method:'UPI (Demo)',applicationFee:'₹150.00',testFee:'₹50.00',serviceFee:'₹75.00',total:'₹275.00'},
  booking:{date:'04/09/2026',time:'10:30 AM',duration:'30 minutes',mode:'Online from this device'},
  licence:{number:'DL-DEMO-2026-81452',validFrom:'04/09/2026',validUntil:'03/03/2027',class:'MCWOG'},
  documents:[{id:'address',name:'Proof of address',file:'electricity-bill-demo.pdf',requirement:'PDF or JPG · up to 2 MB'},{id:'age',name:'Proof of age',file:'school-certificate-demo.pdf',requirement:'PDF or JPG · up to 2 MB'},{id:'photo',name:'Recent photograph',file:'aarav-photo-demo.jpg',requirement:'JPG · 20–200 KB · clear front view'},{id:'signature',name:'Signature',file:'aarav-signature-demo.jpg',requirement:'JPG · 10–100 KB · dark ink'}],
  slots:['09:30 AM','10:30 AM','11:30 AM','02:00 PM','03:30 PM'],
  question:{text:'What does this traffic sign mean?',sign:'⚠',options:['Pedestrian crossing ahead','School zone ahead','Men at work','Hospital ahead'],answer:'Men at work'}
});
