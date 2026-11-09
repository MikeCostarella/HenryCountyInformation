// Henry County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-09
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Pages that block automated fetching (the Auditor's property
// search, the Clerk's eServices, the Holgate schools and village sites, the parcel
// map) were checked in a browser.
//
// THINGS THAT CHANGED SINCE JULY
//
//   * Holgate Local Schools moved to holgateschools.org (linked from the Village of
//     Holgate site); holgate.k12.oh.us no longer loads.
//   * Liberty Center Local Schools' current site is ohlibertycenterls.schoolinsites.com;
//     the old libertycenter.k12.oh.us domain shows 2012-era content.
//   * Northwest State Community College was dropped: its campuses are in Archbold
//     (Fulton) and Van Wert, and its pages never mention Henry County.
//   * OhioMeansJobs moved from Community & Social to Business & Economy.
//   * The Henry County Genealogical Society has disbanded; its records continue at
//     henrycountyfamilies.org.
//
// TRAPS
//
//   Henry County IN/KY/IL/IA/GA/VA/TN/MO/AL/TX; henrycountymuseum.org and
//   henrycountyarts.org are New Castle, Indiana; choosehenry.com is Georgia;
//   napoleonschools.org is Michigan; Napoleon ND; artsatthearmory.org is
//   Somerville MA; the "Henry County YMCA" on ymca.org is Indiana.
//
// GEOGRAPHY
//
//   * One city (Napoleon, the seat). Villages with sites: Deshler, Hamler, Holgate,
//     Liberty Center and McClure. Florida, Malinta and New Bavaria have none;
//     Ridgeville Corners is unincorporated.
//   * Four school districts (Napoleon Area City, Patrick Henry, Liberty Center,
//     Holgate), served by the Northwest Ohio ESC and Four County Career Center
//     (both in Archbold). Mental health is the Four County ADAMhs Board; community
//     action is NOCAC (Defiance).
//
// LEFT OUT
//
//   * henrycountysheriff.com (error page), henrycountyhistory.org (parked),
//     henrycountyohioarts.org and man-unit.org (domains gone), visitnaphc.com
//     (server error), henrycountyplanning.com (blank hosting page) and the Deshler
//     Corn City Festival page (404).
//   * CCNO regional jail (Stryker), as for Fulton.
//   * The 13 townships, village fire departments, land bank, Habitat, service clubs,
//     community foundation and village festivals: no websites found.
//   * The Recorder's records search and the BOE VoterView lookup: vendor portals.

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Appraisal Research Corporation";

export const LINKS = [
  // ---------- Government ----------
  { name: "Henry County (Official Site)", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/", description: "Official website of Henry County, Ohio, with links to county departments, elected officials, agendas and minutes, and the Commissioners' office at 1853 Oakwood Avenue, Napoleon." },
  { name: "Henry County Board of Commissioners", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/229/Board-of-Commissioners", description: "The Henry County Board of Commissioners holds public sessions at the Henry County Office Complex, 1853 Oakwood Avenue, Napoleon, and lists Commissioners Robert Hastedt, Glenn Miller and Lori Siclair." },
  { name: "Henry County Treasurer", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/207/Treasurers-Office", description: "The Henry County Treasurer's Office at 660 N Perry Street, Napoleon, bills and collects real estate, manufactured home and other local taxes and invests county funds." },
  { name: "Henry County Recorder", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/280/Recorder", description: "The Henry County Recorder at 660 N Perry Street, Napoleon, records deeds, mortgages, liens, plats, military discharges and other real estate documents." },
  { name: "Henry County Prosecuting Attorney", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/275/Prosecuting-Attorney", description: "The Henry County Prosecuting Attorney at 660 N Perry Street, Napoleon, prosecutes crimes for the state, advises county officials and boards, and enforces child support orders." },
  { name: "Henry County Coroner", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/262/Coroner", description: "The Henry County Coroner at 104 E Washington Street, Napoleon, investigates violent, suspicious and sudden deaths and works with law enforcement and the County Prosecutor." },
  { name: "Henry County Dog Warden", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/170/Dog-Warden", description: "The Henry County Dog Warden at P722 State Route 65, McClure, responds to stray dog complaints, sells dog licenses and holds impounded stray dogs." },
  { name: "Henry County Job & Family Services", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/169/Job-Family-Services", description: "Henry County Job & Family Services at the Hahn Center, 104 E Washington Street, Napoleon, provides child and adult protection, financial and economic support, and employment services." },
  { name: "Henry County Child Support Enforcement Agency", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/businessdirectoryii.aspx?bid=10", description: "The Henry County Child Support Enforcement Agency establishes paternity and support orders, locates absent parents, and enforces, reviews and adjusts support orders." },
  { name: "Henry County Veterans Service Commission", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/290/Veterans-Service-Commission", description: "The Henry County Veterans Service Commission at 1855 Oakwood Avenue, Napoleon, provides temporary financial assistance, VA claims help and transportation to VA medical centers for veterans and their families." },
  { name: "Henry County Airport", category: "Government", subcategory: "County", url: "https://www.henrycountyohio.gov/167/Airport", description: "Henry County Airport is a publicly owned, public-use airport at 10-646 County Road O, Napoleon." },
  { name: "Henry County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.henrycountyohio.gov/182/Auditor", description: "The Henry County Auditor, Kevin Garringer, serves as the county's chief fiscal officer, oversees real property appraisal, and handles dog, vendor and manufactured home licensing." },
  { name: "Henry County Auditor Property Search", category: "Government", subcategory: "Auditor", url: "https://henryparcelsearch.appraisalresearchcorp.com/", description: "County Auditor Elizabeth Fruchey's property search, by parcel number, address or owner name, with tax rates." },
  { name: "Henry County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://www.henrycountyohio.gov/254/Clerk-of-Courts", description: "The Henry County Clerk of Courts keeps Common Pleas Court records at 660 N Perry Street and issues motor vehicle and watercraft titles at 1813 Oakwood Avenue, Napoleon." },
  { name: "Henry County Common Pleas Court - Probate / General Divisions", category: "Government", subcategory: "Courts", url: "https://www.henrycountyohio.gov/258/Probate-General-Divisions", description: "The Probate and General Divisions of the Henry County Court of Common Pleas at 660 N Perry Street, Napoleon, hear felony and civil cases and handle estates, guardianships, adoptions and marriage licenses." },
  { name: "Henry County Family Court", category: "Government", subcategory: "Courts", url: "https://henrycountyfamilycourt.com/", description: "Henry County Family Court at 660 N. Perry St., Suite 401, Napoleon, provides court cost, staff directory, attorney, self-representation and family resource information." },
  { name: "Napoleon Municipal Court", category: "Government", subcategory: "Courts", url: "http://napoleonmunicipalcourt.com/", description: "Napoleon Municipal Court at 1819 Oakwood Avenue, Napoleon, offers online record search, payments and e-filing." },
  { name: "Ohio Third District Court of Appeals", category: "Government", subcategory: "Courts", url: "https://www.third.courts.state.oh.us/", description: "The Ohio Third District Court of Appeals in Lima hears appeals from 17 counties including Henry County." },
  { name: "Henry County Common Pleas Clerk eServices", category: "Government", subcategory: "Courts", url: "https://eservices.henrycountyohio.gov/eservices/", description: "Public access portal for case records kept by the Henry County Common Pleas Clerk, with search, e-filing and court calendar." },
  { name: "Henry County Sheriff's Office", category: "Government", subcategory: "Sheriff", url: "https://www.henrycountyohio.gov/190/Sheriffs-Office", description: "The Henry County Sheriff's Office at 123 E. Washington Street, Napoleon, provides law enforcement, runs the county jail, and handles CCW licensing, civil process and sheriff sales." },
  { name: "Henry County Engineer", category: "Government", subcategory: "Public Works", url: "https://henrycountyengineer.com/", description: "The Henry County Engineer's office at 1823 Oakwood Avenue, Napoleon, offers permit applications, GIS data, surveys and plats, maps, and snow and ice removal information." },
  { name: "Henry County Solid Waste District - Landfill, Litter Prevention & Recycling", category: "Government", subcategory: "Public Works", url: "https://www.henrycountyohio.gov/188/Landfill-Litter-Prevention-Recycling", description: "The Henry County exempt transfer facility at L622 County Road 11, Malinta, accepts non-recyclable material, and the page lists fees and 24-hour recycling drop-off sites around the county." },
  { name: "Napoleon Power & Light", category: "Government", subcategory: "Public Works", url: "https://www.napoleonohio.com/departments/electric", description: "Napoleon Power & Light operates the City of Napoleon's municipal electric system and maintains streetlights and traffic control equipment." },
  { name: "Napoleon Public Works", category: "Government", subcategory: "Public Works", url: "https://www.napoleonohio.com/departments/public-works-department", description: "Napoleon Public Works oversees city engineering, streets and sewers, water distribution, refuse, recycling and yard waste." },
  { name: "Henry County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.henrycountyohio.gov/231/Board-of-Elections", description: "The Henry County Board of Elections at 1827 Oakwood Avenue, Napoleon, provides voter registration, absentee voting, candidate, precinct and election results information." },
  { name: "Henry County Emergency Management Agency", category: "Government", subcategory: "Public Safety", url: "https://www.henrycountyohio.gov/172/Emergency-Management-Agency", description: "The Henry County Emergency Management Agency coordinates hazard identification, emergency operations planning, exercises and training across the county." },
  { name: "Napoleon City Police Department", category: "Government", subcategory: "Public Safety", url: "https://napoleonpoliceoh.com/", description: "The Napoleon City Police Department at 310 Glenwood Avenue, Napoleon, provides community-based law enforcement, records requests and community resources." },
  { name: "Napoleon Fire and Rescue", category: "Government", subcategory: "Public Safety", url: "https://www.napoleonfire.com/", description: "Napoleon Fire and Rescue provides firefighting, EMS, rescue, HazMat and fire prevention services to the city of Napoleon." },
  { name: "Henry Soil & Water Conservation District", category: "Government", subcategory: "Agriculture", url: "https://www.henryswcd.com/", description: "Henry Soil & Water Conservation District at 2260 Scott Street, Napoleon, provides conservation assistance to producers, H2Ohio programs and county ditch maintenance information." },
  { name: "Henry County Transportation Network", category: "Government", subcategory: "Transit", url: "https://www.henrycountyohio.gov/185/Transportation-Network", description: "Henry County Transportation Network at 1805 Oakwood Avenue, Napoleon, provides advance-booked public rides for medical and personal appointments." },
  { name: "Henry County Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.henrycountyohio.gov/289/Planning-Commission", description: "The Henry County Planning Commission at 1823 Oakwood Avenue, Napoleon, guides countywide development and maintains the subdivision and floodplain regulations and comprehensive plan." },
  { name: "Maumee Valley Planning Organization", category: "Government", subcategory: "Planning", url: "https://www.mvpo.org/", description: "Maumee Valley Planning Organization in Defiance provides housing, community development, economic development and transportation planning services to Defiance, Fulton, Henry, Paulding and Williams counties." },
  { name: "Henry County Parcel Map", category: "Government", subcategory: "Planning", url: "https://experience.arcgis.com/experience/1968c6ecf0af470bb4484dc95a2d8dfc", description: "Online parcel map with data prepared by the Henry County Engineer's and Auditor's offices." },
  { name: "City of Napoleon", category: "Government", subcategory: "City", url: "https://www.napoleonohio.com/", description: "Official website of the City of Napoleon, the Henry County seat, with City Hall at 255 West Riverview and links to city departments, utilities and council." },
  { name: "Napoleon City Council", category: "Government", subcategory: "City", url: "https://www.napoleonohio.com/City-Government/Napoleon-City-Council", description: "The Napoleon City Council page lists council members, their committee assignments and email addresses." },
  { name: "Village of Deshler", category: "Government", subcategory: "Village", url: "https://villageofdeshler.com/", description: "Official website of the Village of Deshler, with the village office at 101 E. Main Street and information on government, utilities, income tax and zoning." },
  { name: "Village of Liberty Center", category: "Government", subcategory: "Village", url: "https://libertycenteroh.gov/", description: "Official website of the Village of Liberty Center, with the village office at 110 East St and ordinances, resolutions, council minutes and utility bill payment." },
  { name: "Village of Holgate", category: "Government", subcategory: "Village", url: "https://www.holgateohio.com/", description: "Official website of the Village of Holgate, with the village office at 327 Railway Avenue and listings of village officials, council and notices." },
  { name: "Village of McClure", category: "Government", subcategory: "Village", url: "https://mcclureoh.org/", description: "Website of the Village of McClure with village council meeting and waterline project notices." },
  { name: "Village of Hamler", category: "Government", subcategory: "Village", url: "https://hamlerohio.com/", description: "Village government site with utilities, income tax, zoning, parks and recreation and events for Hamler." },
  // ---------- Education ----------
  { name: "Napoleon Area City Schools", category: "Education", subcategory: "K-12", url: "https://www.napoleonareaschools.org/", description: "Public school district based at 701 Briarheath Drive in Napoleon, operating Napoleon Elementary School and Napoleon Junior/Senior High School." },
  { name: "Napoleon Elementary School", category: "Education", subcategory: "K-12", url: "https://elem.napoleonareaschools.org/", description: "Elementary school of Napoleon Area City Schools at 725 Westmoreland Avenue, Napoleon." },
  { name: "Napoleon Junior/Senior High School", category: "Education", subcategory: "K-12", url: "https://njshs.napoleonareaschools.org/", description: "Junior and senior high school of Napoleon Area City Schools at 701 Briarheath Drive, Napoleon." },
  { name: "Patrick Henry Local Schools", category: "Education", subcategory: "K-12", url: "https://www.phpatriots.org/", description: "Public school district at 6900 State Route 18, Hamler, with a high school, middle school and elementary on one campus." },
  { name: "Patrick Henry High School", category: "Education", subcategory: "K-12", url: "https://www.phpatriots.org/high-school", description: "High school of Patrick Henry Local Schools at 6900 State Route 18, Hamler." },
  { name: "Patrick Henry Middle School", category: "Education", subcategory: "K-12", url: "https://www.phpatriots.org/middle-school", description: "Middle school serving grades 5 through 8 for Patrick Henry Local Schools at 6900 State Route 18, Hamler." },
  { name: "Patrick Henry Elementary", category: "Education", subcategory: "K-12", url: "https://www.phpatriots.org/elementary", description: "Elementary school of Patrick Henry Local Schools at 6900 State Route 18, Hamler." },
  { name: "Liberty Center Local Schools", category: "Education", subcategory: "K-12", url: "https://ohlibertycenterls.schoolinsites.com/", description: "Public school district at 100 Tiger Trail, Liberty Center, operating an elementary, middle school and high school." },
  { name: "Liberty Center Elementary School", category: "Education", subcategory: "K-12", url: "https://ohlibertycenterls.schoolinsites.com/elementary", description: "Elementary school of Liberty Center Local Schools at 100 Tiger Trail, Liberty Center." },
  { name: "Liberty Center Middle School", category: "Education", subcategory: "K-12", url: "https://ohlibertycenterls.schoolinsites.com/middleschool", description: "Middle school of Liberty Center Local Schools at 100 Tiger Trail, Liberty Center." },
  { name: "Liberty Center High School", category: "Education", subcategory: "K-12", url: "https://ohlibertycenterls.schoolinsites.com/highschool", description: "High school of Liberty Center Local Schools at 100 Tiger Trail, Liberty Center." },
  { name: "Holgate Local Schools", category: "Education", subcategory: "K-12", url: "https://www.holgateschools.org/", description: "Public school district at 801 East Joe E. Brown Avenue, Holgate, with district, school, calendar, board and athletics information." },
  { name: "Northwest Ohio Educational Service Center", category: "Education", subcategory: "ESC", url: "https://www.nwoesc.org/", description: "Educational service center at 205 Nolan Parkway, Archbold, serving school districts in Defiance, Henry, Fulton and Williams counties." },
  { name: "Four County Career Center", category: "Education", subcategory: "Career Center", url: "http://www.fourcounty.net/", description: "Career and technical center at 22-900 State Route 34, Archbold, offering high school career programs and adult education." },
  { name: "St. Paul Lutheran School", category: "Education", subcategory: "Private School", url: "https://www.school.stpaulnapoleon.org/", description: "Lutheran school with a preschool program at 1075 Glenwood Ave., Napoleon." },
  { name: "St. Augustine Catholic School", category: "Education", subcategory: "Private School", url: "https://www.staugie.net/st-augustine-school", description: "Catholic school of St. Augustine Catholic Church on Monroe Street in Napoleon." },
  { name: "Napoleon Public Library", category: "Education", subcategory: "Library", url: "https://www.napoleon.lib.oh.us/", description: "Public library system with branches in Napoleon, Florida and McClure." },
  { name: "Liberty Center Public Library", category: "Education", subcategory: "Library", url: "https://www.libertycenterlibrary.org/", description: "Public library at 124 East Street, Liberty Center." },
  { name: "Holgate Community Library", category: "Education", subcategory: "Library", url: "http://www.holgatecommunitylibrary.com/", description: "Public library at 204 Railway Ave., Holgate, offering e-books and audiobooks through the Ohio Digital Library." },
  { name: "Patrick Henry School District Public Libraries", category: "Education", subcategory: "Library", url: "https://phlibraries.org/", description: "Public library system with branch libraries in Deshler and Hamler." },
  // ---------- Health ----------
  { name: "Henry County Health Department", category: "Health", subcategory: "Public Health", url: "https://henrycohd.org/", description: "County health department at 1843 Oakwood Ave, Napoleon, providing clinical services, environmental health, Help Me Grow home visiting and vital statistics." },
  { name: "Henry County Hospital", category: "Health", subcategory: "Hospital", url: "https://www.henrycountyhospital.org/", description: "Not-for-profit hospital at 1600 East Riverview Ave., Napoleon." },
  { name: "Henry County Hospital Emergency Care Services", category: "Health", subcategory: "Hospital", url: "https://www.henrycountyhospital.org/our-locations/emergency-care-services/", description: "Emergency department of Henry County Hospital at 1600 East Riverview Ave, Napoleon, open 24 hours a day." },
  { name: "Henry County Hospital Urgent Care", category: "Health", subcategory: "Clinic", url: "https://www.henrycountyhospital.org/our-services/urgent-care/", description: "Walk-in urgent care at Henry County Hospital, 1600 East Riverview Ave., Napoleon, open seven days a week." },
  { name: "Henry County Hospital Primary Care", category: "Health", subcategory: "Clinic", url: "https://www.henrycountyhospital.org/our-locations/primary-care/", description: "Family practice clinic of Henry County Hospital at 1600 East Riverview Ave, Napoleon." },
  { name: "HCH Women's Health", category: "Health", subcategory: "Clinic", url: "https://www.henrycountyhospital.org/our-locations/hch-women-s-health/", description: "Women's health clinic of Henry County Hospital at 1600 East Riverview Ave, Napoleon." },
  { name: "HCH Orthopedics & Spine", category: "Health", subcategory: "Clinic", url: "https://www.henrycountyhospital.org/our-locations/hch-orthopedics/", description: "Orthopedics and spine specialty clinic of Henry County Hospital at 1600 East Riverview Ave, Napoleon." },
  { name: "Mercy Health - Napoleon Family Medicine", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/medical-centers-clinics/toledo/mercy-health-napoleon-clinic", description: "Primary care and family medicine office at 1426 North Scott Street, Napoleon." },
  { name: "Mercy Health - Napoleon Walk-in Clinic", category: "Health", subcategory: "Clinic", url: "https://mercy.com/locations/specialty-locations/walk-in-care-clinics/mercy-health-napoleon-walk-in-clinic", description: "Weekday walk-in clinic at 1426 North Scott St, Napoleon." },
  { name: "Mercy Health - Henry County Urology", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/specialty-locations/urology-pelvic-floor/mercy-health-henry-county-urology", description: "Urology office at 1600 E. Riverview Ave., Napoleon." },
  { name: "Four County ADAMhs Board", category: "Health", subcategory: "Mental Health", url: "https://fourcountyadamhs.com/", description: "Alcohol, drug addiction and mental health services board in Archbold serving Defiance, Fulton, Henry and Williams counties, with a 24/7 crisis line." },
  { name: "OhioGuidestone - Henry County", category: "Health", subcategory: "Mental Health", url: "https://ohioguidestone.org/Henry", description: "Behavioral health provider with an outpatient counseling center and ReadyCare walk-in clinic at 600 Freedom Dr. and The Renewal Center residential treatment at 1895 Oakwood Ave., Napoleon." },
  { name: "The Center for Child and Family Advocacy", category: "Health", subcategory: "Mental Health", url: "https://www.theccfa.org/", description: "Mental health treatment and trauma and abuse advocacy provider at 219 E Washington St, Napoleon." },
  { name: "Maumee Valley Guidance Center", category: "Health", subcategory: "Mental Health", url: "https://maumeevalleyguidancecenter.org/", description: "Community behavioral healthcare center with an office at 1325 Woodlawn Avenue, Napoleon." },
  { name: "Recovery Services of Northwest Ohio", category: "Health", subcategory: "Mental Health", url: "https://www.rsnwo.org/", description: "Addiction recovery services provider with a Napoleon office at 118 E. Clinton Street." },
  { name: "HOPE Services (Henry County Board of Developmental Disabilities)", category: "Health", subcategory: "County", url: "https://www.henrydd.org/", description: "Henry County Board of Developmental Disabilities at 135 E. Maumee Ave., Napoleon." },
  { name: "Henry County Senior Center", category: "Health", subcategory: "Seniors", url: "https://henrycountyseniorcenter.com/", description: "Senior center at 203 Rohrs Street, Napoleon, providing meals on wheels, transportation and activities for people over 60." },
  // ---------- Business & Economy ----------
  { name: "Henry County Economic Development (CIC)", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.henrycountyohio.gov/171/Economic-Development-CIC", description: "County page for the Community Improvement Corporation of Henry County, a not-for-profit that works to retain, expand and attract capital investment and jobs, at the Hahn Center, 104 E Washington Street, Suite 301, Napoleon." },
  { name: "Henry County CIC", category: "Business & Economy", subcategory: "Economic Development", url: "https://henrycountyed.com/", description: "The CIC's own site, which coordinates incentives, loans, tax credits and grants and helps businesses with site selection in Henry County." },
  { name: "Henry County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.henrycountychamber.org/", description: "Chamber of commerce that runs a member business directory, a county events calendar, Chamber Dollar certificates and a Henry County community guide." },
  { name: "Deshler Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "http://www.deshlerohiochamber.com/", description: "Chamber of commerce for Deshler, Ohio, that promotes local businesses, sponsors community events and issues Chamber Bucks redeemable at member businesses." },
  { name: "Napoleon Outdoor Refreshment Area (NORA)", category: "Business & Economy", subcategory: "Downtown", url: "https://www.napoleonohio.com/new-resident-information/napoleon-outdoor-refreshment-area", description: "City of Napoleon page describing the downtown outdoor refreshment area where patrons of participating businesses may carry a designated cup within posted boundaries." },
  { name: "OSU Extension Henry County", category: "Business & Economy", subcategory: "Agriculture", url: "https://henry.osu.edu/", description: "Ohio State University Extension office for Henry County, offering 4-H youth and agriculture and natural resources programs from the Hahn Center, Suite 302, 104 E Washington Street, Napoleon." },
  { name: "Henry County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/community/counties/henry/", description: "Ohio Farm Bureau page for its Henry County chapter, listing membership, scholarships, local involvement opportunities and office contact information." },
  { name: "OhioMeansJobs Henry County", category: "Business & Economy", subcategory: "Workforce", url: "https://www.henrycountyohio.gov/284/Ohio-Means-Jobs---Henry-County", description: "County page for the OhioMeansJobs resource center, which offers job-search computers, resume software, job postings and employment and training services for eligible youth, adults and dislocated workers." },
  // ---------- Community & Social ----------
  { name: "United Way of Henry County", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.unitedwayhenry.org/", description: "United Way at 611 N Perry Street, Napoleon, that funds partner agencies and runs the Dolly Parton Imagination Library, a scholarship and a food pantry list." },
  { name: "Henry County Humane Society", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.henryhumane.org", description: "Nonprofit animal shelter at 1136 Independence Drive, Napoleon, offering pet adoption, animal surrender, spay and neuter services and community education." },
  { name: "Northwestern Ohio Community Action Commission (NOCAC)", category: "Community & Social", subcategory: "Nonprofit", url: "https://nocac.org/", description: "Community action agency at 1933 E 2nd Street, Defiance, that lists Henry County among the counties it serves and provides preschool, child care help, emergency and utility assistance, housing and homelessness services, and weatherization." },
  { name: "Toledo Northwestern Ohio Food Bank", category: "Community & Social", subcategory: "Food & Assistance", url: "https://www.toledofoodbank.org/about-us", description: "Regional food bank at 24 E. Woodruff Ave., Toledo, whose eight-county service area includes Henry County." },
  // ---------- Recreation & Tourism ----------
  { name: "Henry County Fair and Fairgrounds", category: "Recreation & Tourism", subcategory: "Fair", url: "https://henrycountyfairgrounds.com/", description: "Site of the Henry County Fair and Fairgrounds & Event Center at 907 S. Perry Street, Napoleon, with the fair schedule, grandstand lineup, livestock information and facility rentals." },
  { name: "Hamler Summer Fest", category: "Recreation & Tourism", subcategory: "Fair", url: "https://hamlersf.com", description: "Annual festival at Hamler Community Park on State Route 109 in Hamler whose proceeds benefit the Hamler Community Park System." },
  { name: "Hamler Country Fest", category: "Recreation & Tourism", subcategory: "Fair", url: "https://hamlercountryfest.com", description: "Country music festival on the north edge of Hamler on State Route 109 whose proceeds benefit the Hamler Community Park System." },
  { name: "Independence Dam State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/independence-dam-state-park", description: "Ohio DNR state park along the Maumee River with a boat launch, primitive riverside camping, fishing and a towpath trail along the Miami and Erie Canal." },
  { name: "Mary Jane Thurston State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/wps/portal/gov/odnr/go-and-do/plan-a-visit/find-a-property/mary-jane-thurston-state-park", description: "Ohio DNR state park on the Maumee State Scenic River near Grand Rapids with a launch ramp, camping, a day lodge, hiking trails and disc golf." },
  { name: "Maumee State Forest", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/maumee-state-forest", description: "Ohio DNR state forest spanning portions of Fulton, Lucas and Henry counties with hiking, bridle and APV trails and public hunting." },
  { name: "Napoleon Parks and Recreation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.napoleonohio.com/departments/parks-and-recreation/parks-and-recreation-department", description: "City of Napoleon department that runs recreation programs, the aquatic center, golf club, city parks, dog park, shelter house rentals and cemeteries." },
  { name: "Napoleon City Parks", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.napoleonohio.com/departments/parks-and-recreation/parks", description: "City of Napoleon list of its parks, including Oakwood, Glenwood, Ritter, Oberhaus, Swearingen and East Riverdowns parks, with locations and amenities." },
  { name: "Napoleon Dog Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.napoleonohio.com/departments/parks-and-recreation/dog-park", description: "City of Napoleon off-leash dog park at East Riverdowns Park on East Front Street, open to members with licensed and vaccinated dogs." },
  { name: "Napoleon Aquatic Center", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.napoleonohio.com/departments/parks-and-recreation/swimming-pool", description: "City pool at 521 Glenwood Avenue, Napoleon, with a zero-entry leisure area, water slides, climbing walls and an eight-lane competition pool." },
  { name: "Napoleon Golf Club", category: "Recreation & Tourism", subcategory: "Golf", url: "https://napoleongolfclub.com/", description: "Nine-hole Napoleon Municipal Golf Course at 521 Glenwood Ave, Napoleon." },
  { name: "Henry County, Ohio, Historical Society", category: "Recreation & Tourism", subcategory: "Museum", url: "https://henrycountyhistoryorg.wordpress.com/", description: "Historical society (P.O. Box 443, Napoleon) that runs the Dr. John Bloomfield Home and Carriage House Museum at 229 W. Clinton St. and other historic sites in Napoleon." },
  { name: "Henry County, Ohio, Families", category: "Recreation & Tourism", subcategory: "Museum", url: "https://henrycountyfamilies.org/", description: "Family-history site with census, tax, birth, death and cemetery records for Henry County, continuing the work of the disbanded Henry County Genealogical Society." },
  // ---------- News & Media ----------
  { name: "The Northwest Signal", category: "News & Media", subcategory: "Newspaper", url: "https://www.northwestsignal.net/", description: "Community newspaper at 595 E. Riverview Ave., Napoleon, serving Henry, Fulton, Lucas and surrounding counties." },
  { name: "The Crescent-News", category: "News & Media", subcategory: "Newspaper", url: "https://www.crescent-news.com/", description: "Defiance-based daily newspaper whose regional coverage includes Henry County and Napoleon news." },
  { name: "The Blade (Toledo)", category: "News & Media", subcategory: "Newspaper", url: "https://www.toledoblade.com/", description: "Toledo newspaper website covering northwest Ohio, including Henry County court and public safety news." },
  { name: "The Village Reporter", category: "News & Media", subcategory: "Newspaper", url: "https://thevillagereporter.com/", description: "Northwest Ohio news site covering Williams and Fulton counties that also publishes Napoleon and Henry County stories." },
  { name: "103.1 WNDH", category: "News & Media", subcategory: "Radio", url: "https://1031wndh.iheart.com/", description: "Classic hits radio station licensed to Napoleon, Ohio, with local morning programming and a WNDH News podcast." },
  { name: "WTOL 11", category: "News & Media", subcategory: "TV", url: "https://www.wtol.com/", description: "Toledo television station covering Northwest Ohio, including news from Napoleon." },
  { name: "River Rat Country", category: "News & Media", subcategory: "Online News", url: "https://riverratcountry.com/", description: "Northwest Ohio country music stream and local news site from NWO Community Media that reports Napoleon and Henry County news." },
];
