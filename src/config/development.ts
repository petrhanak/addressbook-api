export default {
  auth: {
    jwt: {
      expiresIn: '1h',
      secret: 'abc123',
    },
    password: {
      cryptoRounds: 10,
      effectiveLength: 72,
    },
  },
  database: {
    firebase: {
      clientEmail:
        process.env.DATABASE_FIREBASE_CLIENTEMAIL ||
        'api-479@addressbook-api-dev.iam.gserviceaccount.com',
      databaseURL:
        process.env.DATABASE_FIREBASE_DATABASEURL ||
        'https://addressbook-api-dev.firebaseio.com',
      privateKey:
        process.env.DATABASE_FIREBASE_PRIVATEKEY ||
        'LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRQzZFWkdhdXk3Nk1EQ3IKRUhiQmtsZXVOaGZXeVhYdWxiTUptdVJ4dHBuU2JURFBnZ1Y2MDJFY2kyZlh1enhBT2JtUkhwYTFHVGtMQVc2TAprUnVuUDFhRE9GeVp2eEdkYWVSS0djMzVQNFhOWkR0VWFTVGVkSHR1Rm9oRWZUV0hTbHRRQ29qK3ZmalBINEIyCnBOOE1zb09GKzArT0VNMHFFMkcrRlRyK1owN0Z5Sy83MUFQWXJ1SnRDUDNwRUk1MTk3S3Q5cWJuL050ZmVEa1gKZUpmRmJmTVpjK1Y1UTRrQTFLNDNkMHhCWWFnSFdwamh6UTc0VzBsT3FmMHRLeVoyV2RoT2tYcTNKZVYrSUs0cgoyMFV1OWREYktZSURQUndmakQvOHo4VGdTaTFMK1M2ZUFOanJoaldtaDZOUWJaMHhidTB6WjRob0tGcjNsS1lRCmUvbXgxR3czQWdNQkFBRUNnZ0VBUWNldVF4YUR3QjFEUjJhMXBTOVlZaFZyamhxQTM4ejZrNTIzdjErL3Q3MjAKY05mVm1odWFqRjNZWTFNbE5NdHppQk5aVWtMTmdNK0x4am1SbmludEtzekZKL0Y5aDdvRTVCR0ZXT1dWSnd5VgpVUDB1OUpvWGZNN29jOVlVRTNVOUhPbnNqcXFZaUpqcGNJaE85bzB4cEM4NWE4OFN5Um83QnRrNGx2SHN6a3pQCkFLRXZtd1Z5VElQTFU3MmtXOHc0L2ZxNVg4WG9tcjNlcmYwT2FZSzJqeE9Mek9qVkM3MWppTHpVZTIwTFhQREYKczkzY3RFYzlOK0FGbzdoTGNYTmlGckxScTdnQ1o2WmZGWWhJb1lrT091Rnp3VnZIK3VacmxUcVA3RkJsbUU0OQpFaXByTXEwMHd5UWJvek9ZbFZ4SExmNVFwdmFiMkVjaWtvTnJkcEFQVVFLQmdRRHFEc2IvYUNTakFBcitLcXFRCk5KYkpQdkNjMVBnZVJrdXA1REwzTmtCVTVKTStpSDA1dkZyV2IzZU9Vb09BamwreXJBNmpjQkd3VCtBL3J0aGYKa0NTTHJ4cXpxaE9IN3dEdzR6WFViOFVpQ0I2YTBpV1R2bXg2cVJQWXpIWGFkTFFvMnBBMElCSWtEUEdvc1Fqagpyb2FBNVFJbnpSa25yMnkraXQxZHVudEd6d0tCZ1FETGd4WWtORE1UbzFUVFl0c1I1V1h4QzF6T0lHc0tHcm9OCkp2ZE9RaHU2ZnJVYnY0VnErOVZaaC9uRENQWFZ4azBjRHBGcEFDT28rM1dtVmtyclRGeERtRUxKYU45V3M0WE4KNFh5Rjg4eVJlbkV6ZDRDNmx6ZC96eUZsazR0S0FUbTNDSGhsY3NkYVprdnpsTEg0NlpRN25zanNoOERpcUNFKwpTNnFXUGkzZUdRS0JnUUMvRUw4YjRleitidHVLYmxQOEVpSUJPSEw4NDlHRURVaFk4S00yTVVCRXpLN3lma01UCmJaSU51TUsxR09DbWdoTFc3U09xQWFNKzlZV1BGdkVrMmFzcnFBNjVHWjZGK2ZJZnNxclB0MG9LcE93dTRGdXkKaHVGUkpGTENTTzN3SGhLdnd2T3l5WGRsbkhkdGlNOUQ1Y1dBMVBGMGdqWUZzbXVvQS8zL05Hckwrd0tCZ1FDagpxOHBMMVp0YWFOcFlvMEZ5VkI2M1RCOFlPNlE2WFNKU1g0czNhaDFvMEd5UlkyZEdra0NVbjdIejlDbmFBb0NUClZ2Z0ZEVEtndlpOeDhpYVF0RG5qdHZuSGg4dE9yRlNwTG5aNk9JZkdYRVhjVVhpN0Y5QnZ2c0txTVk0dE4yMFcKVWY2YUFFUnA1S21pdld5Z3RpSWNET2lrcWMwcnZISDM2dHpIdGp3blNRS0JnUURic3NMRGFuMnE4alZ6ZWVmNQpBMTdvZzc3V0dUbVAwT0RxYVRJeGdwVWNJY25PWTFZU0NtcXZNNllONm9nT2xVdFBZMXBneHYrZXV4MEREdys1ClU3THU1ajlSTHFDQ3daODREMkI4K0NzYm5KT1JNalQreTdBTWE2VWlxamFxeWxnanVlRUhpaWNaK0pHL3NnYkwKdEFPK2kxUDJ0SWs0Y1piWWgyY3ExNWZjQkE9PQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==',
    },
    sql: {
      host: process.env.DATABASE_HOST || '127.0.0.1',
      name: process.env.DATABASE_NAME || 'addressbook',
      password: process.env.DATABASE_PASSWORD || '1234',
      user: process.env.DATABASE_USER || 'postgres',
    },
  },
  server: {
    port: process.env.PORT || 3000,
  },
}
