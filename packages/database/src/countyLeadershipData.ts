export interface CountyLeadershipRecord {
  countyId: string;
  countyName: string;
  governor: {
    name: string;
    party: string;
    coalition: string;
    photoUrl: string;
    vying2027: string;
  };
  senator: {
    name: string;
    party: string;
    coalition: string;
    photoUrl: string;
    vying2027: string;
  };
  womenRep: {
    name: string;
    party: string;
    coalition: string;
    photoUrl: string;
    vying2027: string;
  };
}

export const ALL_47_COUNTY_LEADERSHIP: CountyLeadershipRecord[] = [
  {
    countyId: '001',
    countyName: 'Mombasa',
    governor: { name: 'Abdulswamad Shariff Nassir', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Mohamed Faki Mwinyihaji', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Zamzam Chimba Mohammed', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '002',
    countyName: 'Kwale',
    governor: { name: 'Fatuma Achani', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Issa Juma Boy', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Fatuma Masito', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '003',
    countyName: 'Kilifi',
    governor: { name: 'Gideon Maitha Mung\'aro', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Stewart Madzayo', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator / Senate Minority Leader' },
    womenRep: { name: 'Gertrude Mbeyu', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '004',
    countyName: 'Tana River',
    governor: { name: 'Dhadho Godhana', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Term Limit / Regional)' },
    senator: { name: 'Danson Mungatana', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027' },
    womenRep: { name: 'Amina Dika Abdullahi', party: 'KANU', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '005',
    countyName: 'Lamu',
    governor: { name: 'Issa Timamy', party: 'ANC', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Joseph Githuku Kamau', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Capt. Ruweida Obo', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'MP / Women Rep' }
  },
  {
    countyId: '006',
    countyName: 'Taita-Taveta',
    governor: { name: 'Andrew Mwadime', party: 'Independent', coalition: 'Independent', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Johnes Mwaruma', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Lydia Haika Mnene', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Governor 2027 Aspirant' }
  },
  {
    countyId: '007',
    countyName: 'Garissa',
    governor: { name: 'Nathif Jama Adam', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Abdulkadir Haji', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Udgoon Siyad Siyad', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '008',
    countyName: 'Wajir',
    governor: { name: 'Ahmed Abdullahi Jiir', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending / CoG Vice Chair)' },
    senator: { name: 'Abbas Sheikh Mohamed', party: 'UDM', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Fatuma Jehow', party: 'KANU', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '009',
    countyName: 'Mandera',
    governor: { name: 'Mohamed Adan Khalif', party: 'UDM', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Ali Roba Ibrahim', party: 'UDM', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator / UDM Party Leader' },
    womenRep: { name: 'Umulkher Kassim', party: 'UDM', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '010',
    countyName: 'Marsabit',
    governor: { name: 'Mohamud Mohamed Ali', party: 'UDM', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Term Limit)' },
    senator: { name: 'Mohamed Said Chute', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Naomi Jillo Waqo', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Deputy Majority Whip / Governor Aspirant' }
  },
  {
    countyId: '011',
    countyName: 'Isiolo',
    governor: { name: 'Abdi Hassan Guyo', party: 'Jubilee', coalition: 'Kenya Kwanza Accord', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Fatuma Adan Dullo', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Mumina Bonaya', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '012',
    countyName: 'Meru',
    governor: { name: 'Kawira Mwangaza', party: 'Independent', coalition: 'Independent', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor (Surviving Impeachment Battles)' },
    senator: { name: 'Kathuri Murungi', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senate Deputy Speaker / Governor Aspirant' },
    womenRep: { name: 'Elizabeth Kailemia', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '013',
    countyName: 'Tharaka-Nithi',
    governor: { name: 'Muthomi Njuki', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Term Limit / National Role)' },
    senator: { name: 'Mwenda Gataya', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Susan Ngugi', party: 'TSP', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '014',
    countyName: 'Embu',
    governor: { name: 'Cecily Mutitu Mbarire', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Governor (Defending / UDA National Chair)' },
    senator: { name: 'Alexander Mundigi', party: 'DP', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Pamela Njoki Njeru', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '015',
    countyName: 'Kitui',
    governor: { name: 'Julius Makau Malombe', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Enoch Kiio Wambua', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Irene Kasalu', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '016',
    countyName: 'Machakos',
    governor: { name: 'Wavinya Ndeti', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Agnes Kavindu Muthama', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Joyce Kamene', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '017',
    countyName: 'Makueni',
    governor: { name: 'Mutula Kilonzo Junior', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Daniel Maanzo', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Rose Museo Mumo', party: 'Wiper', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '018',
    countyName: 'Nyandarua',
    governor: { name: 'Moses Kiaraho Badilisha', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'John Methu Muhia', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Faith Wairimu Gitau', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '019',
    countyName: 'Nyeri',
    governor: { name: 'Mutahi Kahiga', party: 'UDA', coalition: 'Mount Kenya Faction', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Term Limit)' },
    senator: { name: 'Wahome Wamatinga', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Rahab Mukami Wachira', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '020',
    countyName: 'Kirinyaga',
    governor: { name: 'Anne Mumbi Waiguru', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor (Term Limit / National Cabinet)' },
    senator: { name: 'James Kamau Murango', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Jane Njeri Maina', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '021',
    countyName: 'Murang\'a',
    governor: { name: 'Irungu Kang\'ata', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Defending Kang\'ata Care)' },
    senator: { name: 'Joe Nyutu', party: 'UDA', coalition: 'Mount Kenya Faction', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Betty Maina', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '022',
    countyName: 'Kiambu',
    governor: { name: 'Kimani Wamatangi', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Karungo Thang\'wa', party: 'UDA', coalition: 'Mount Kenya Faction', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Anne Wamuratha', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '023',
    countyName: 'Turkana',
    governor: { name: 'Jeremiah Lomorukai Napotikan', party: 'ODM', coalition: 'Kenya Kwanza Accord', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'James Lomenen Ekorudi', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Cecilia Ngitit', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '024',
    countyName: 'West Pokot',
    governor: { name: 'Simon Kachapin', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Julius Murgor', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Lillian Chebet Tomitom', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '025',
    countyName: 'Samburu',
    governor: { name: 'Jonathan Lelelit Lati', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Steve Lelegwe', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Pauline Lenguris', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '026',
    countyName: 'Trans Nzoia',
    governor: { name: 'George Natembeya', party: 'DAP-K', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400', vying2027: 'Governor (Tawe Movement Leader)' },
    senator: { name: 'Allan Chesang', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Senator / Governor Aspirant' },
    womenRep: { name: 'Lilian Siyoi', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '027',
    countyName: 'Uasin Gishu',
    governor: { name: 'Jonathan Bii Chelilim (Koti Moja)', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Jackson Mandago Kiplagat', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator / Finland Scandal Scrutiny' },
    womenRep: { name: 'Gladys Boss Shollei', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'National Assembly Deputy Speaker / Governor Aspirant' }
  },
  {
    countyId: '028',
    countyName: 'Elgeyo-Marakwet',
    governor: { name: 'Wisley Rotich', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'William Kisang', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Caroline Ngelechei', party: 'Independent', coalition: 'Independent', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '029',
    countyName: 'Nandi',
    governor: { name: 'Stephen Sang', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Term Limit / National Politics)' },
    senator: { name: 'Samson Cherargei', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Cynthia Muge', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '030',
    countyName: 'Baringo',
    governor: { name: 'Benjamin Cheboi', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'William Cheptumo', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Florence Jematia Sergon', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '031',
    countyName: 'Laikipia',
    governor: { name: 'Joshua Irungu', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'John Kinyua', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Jane Kagiri', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '032',
    countyName: 'Nakuru',
    governor: { name: 'Susan Wakarura Kihika', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Tabitha Karanja Keroche', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Liza Chelule Chepkorir', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '033',
    countyName: 'Narok',
    governor: { name: 'Patrick Ole Ntutu', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Ledama Olekina', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor 2027 Aspirant / Senate Minority Whip' },
    womenRep: { name: 'Rebecca Tonkei', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '034',
    countyName: 'Kajiado',
    governor: { name: 'Joseph Ole Lenku', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Term Limit / National Leadership)' },
    senator: { name: 'Kanar Seki', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Leah Sopiato Sankaire', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '035',
    countyName: 'Kericho',
    governor: { name: 'Dr. Erick Kipkoech Mutai', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Surviving County Assembly Disputes)' },
    senator: { name: 'Aaron Cheruiyot', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senate Majority Leader / Regional Chief' },
    womenRep: { name: 'Beatrice Kemei', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '036',
    countyName: 'Bomet',
    governor: { name: 'Prof. Hillary Barchok', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Term Limit)' },
    senator: { name: 'Hillary Kiprotich Sigei', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Linet Chepkorir (Toto)', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Women Representative (Youngest Lawmaker)' }
  },
  {
    countyId: '037',
    countyName: 'Kakamega',
    governor: { name: 'Fernandes Barasa', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Dr. Boni Khalwale (The Bullfighter)', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Elsie Busihile Muhanda', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '038',
    countyName: 'Vihiga',
    governor: { name: 'Dr. Wilber Khasilwa Ottichilo', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Term Limit)' },
    senator: { name: 'Godfrey Osotsi', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Beatrice Adagala', party: 'ANC', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '039',
    countyName: 'Bungoma',
    governor: { name: 'Kenneth Makelo Lusaka', party: 'FORD-Kenya', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending / Ex-Speaker)' },
    senator: { name: 'David Wafula Wakoli', party: 'FORD-Kenya', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Catherine Nanjala Wambilianga', party: 'FORD-Kenya', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '040',
    countyName: 'Busia',
    governor: { name: 'Dr. Paul Nyongesa Otuoma', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Andrew Okiya Omtatah Okoiti', party: 'NRA/Ind', coalition: 'Independent', photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', vying2027: 'Senator / Highest Legislative Delivery Score' },
    womenRep: { name: 'Catherine Nakhabi Omanyo', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '041',
    countyName: 'Siaya',
    governor: { name: 'James Aggrey Bob Orengo', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Senior Counsel / Defending)' },
    senator: { name: 'Dr. Oburu Oginga', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator / Elder Statesman' },
    womenRep: { name: 'Dr. Christine Oduor Ombaka', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '042',
    countyName: 'Kisumu',
    governor: { name: 'Prof. Peter Anyang\' Nyong\'o', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Term Limit / ODM Acting Party Leader)' },
    senator: { name: 'Prof. Tom Ojienda Odhiambo', party: 'ODM', coalition: 'Kenya Kwanza Accord', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Ruth Adhiambo Odinga', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Governor 2027 Aspirant' }
  },
  {
    countyId: '043',
    countyName: 'Homa Bay',
    governor: { name: 'Gladys Atieno Nyasuna Wanga', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Governor (Defending / ODM National Chairperson)' },
    senator: { name: 'Moses Otieno Kajwang', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Senator / Senate Public Accounts Chair' },
    womenRep: { name: 'Joyce Atieno Bensuda Osogo', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '044',
    countyName: 'Migori',
    governor: { name: 'Dr. George Ochilo Mbogo Ayacko', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Eddy Gicheru Oketch', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator' },
    womenRep: { name: 'Fatuma Zainab Mohamed', party: 'Independent', coalition: 'Independent', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '045',
    countyName: 'Kisii',
    governor: { name: 'Paul Simba Arati', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Richard Momoima Onyonka', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', vying2027: 'Governor 2027 Aspirant' },
    womenRep: { name: 'Doris Donya Aburi', party: 'WiPER', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '046',
    countyName: 'Nyamira',
    governor: { name: 'Amos Kimwomi Nyaribo', party: 'UPA', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', vying2027: 'Governor (Defending)' },
    senator: { name: 'Okong\'o Eric Mogeni', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Governor 2027 Aspirant (Senior Counsel)' },
    womenRep: { name: 'Jerusha Mong\'ina Momanyi', party: 'Jubilee', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400', vying2027: 'Women Representative' }
  },
  {
    countyId: '047',
    countyName: 'Nairobi City',
    governor: { name: 'Johnson Arthur Sakaja', party: 'UDA', coalition: 'Kenya Kwanza', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400', vying2027: 'Governor (Defending / Dishi na County)' },
    senator: { name: 'Edwin Watenya Sifuna', party: 'ODM', coalition: 'Azimio la Umoja', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', vying2027: 'Senator / Nairobi Watchman / ODM SG' },
    womenRep: { name: 'Esther Muthoni Passaris', party: 'ODM', coalition: 'Kenya Kwanza Accord', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400', vying2027: 'Women Representative' }
  }
];
