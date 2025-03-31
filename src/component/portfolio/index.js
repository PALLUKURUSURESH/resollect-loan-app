import React, { useState } from "react";
import{IoIosArrowDown } from "react-icons/io"; // Dropdown Arrow (beside user profile)
import { 
  AiOutlineFilter,  // Filter button icon
  AiOutlineCheckSquare  // Loan selection checkbox (alternative)
} from "react-icons/ai";


// import LoanCard from "../LoanCard";
import NotFound from '../notfound'
import './index.css'

const loans = [
    {
      loanNo: "L28U3265",
      loanType: "Personal Loan",
      borrower: "Vivaan Virk",
      borrowerAddress: "H.No. 653 Dada Ganj Ichalkaranji 279923",
      coBorrower: "Elakshi Chahal",
      coBorrowerAddress: "16/45 Divan Road Jabalpur 962051",
      currentDPD: 76,
      sanctionAmount: 3863519,
      region: "West"
    },
    {
      loanNo: "L28U3266",
      loanType: "Personal Loan",
      borrower: "Nirvi Sahni",
      borrowerAddress: "41/42, Dua, Amroha-741195",
      coBorrower: "Dhanuk Lalla",
      coBorrowerAddress: "48/41, Garde Path Uluberia 709956",
      currentDPD: 75,
      sanctionAmount: 2687360,
      region: "East"
    },
    {
      loanNo: "L28U3267",
      loanType: "Personal Loan",
      borrower: "Samaira Jain",
      borrowerAddress: "79/10 Barad Zila Thoothukudi 606938",
      coBorrower: "Chirag Tripathi",
      coBorrowerAddress: "23/11 Ravel Street, Panchkula-008035",
      currentDPD: 76,
      sanctionAmount: 3617140,
      region: "South"
    },
    {
      loanNo: "L28U3269",
      loanType: "Personal Loan",
      borrower: "Aradhya Jayaram",
      borrowerAddress: "410, Vohra Zila Moradabad 963541",
      coBorrower: "Shaan Hora",
      coBorrowerAddress: "35/41, Bajaj Nagar Nagao-504713",
      currentDPD: 76,
      sanctionAmount: 1383440,
      region: "South"
    },
    {
      loanNo: "L28U3273",
      loanType: "Home Loan",
      borrower: "Nakul Thaman",
      borrowerAddress: "22/61 Jhaveri Marg Tinsukia 392581",
      coBorrower: "Shray Khosla",
      coBorrowerAddress: "H.No. 841 Chaudhary Road, Patna 989718",
      currentDPD: 50,
      sanctionAmount: 3634323,
      region: "West"
    },
    {
      loanNo: "L28U3274",
      loanType: "Home Loan",
      borrower: "Badal Bhasin",
      borrowerAddress: "42, Banik Ganj, Rajpur Sonarpur-081614",
      coBorrower: "Amani Deep",
      coBorrowerAddress: "H.No. 281, Gara Path Mehsana-436521",
      currentDPD: 50,
      sanctionAmount: 349860,
      region: "West"
    },
    {
      loanNo: "L28U3275",
      loanType: "Personal Loan",
      borrower: "Zoya Kala",
      borrowerAddress: "19 Chadha Zila, Giridih 327062",
      coBorrower: "Baiju Sule",
      coBorrowerAddress: "21/50, Bansal Path, Nagapur 817840",
      currentDPD: 50,
      sanctionAmount: 1098362,
      region: "West"
    },
    {
      loanNo: "L28U3278",
      loanType: "Car Loan",
      borrower: "Shlok Kulkarni",
      borrowerAddress: "29/315 Tiwari Street Chandrapur 496217",
      coBorrower: "Stuvan Char",
      coBorrowerAddress: "177 Sura Nagar Jaipur 290279",
      currentDPD: 50,
      sanctionAmount: 2738666,
      region: "West"
    },
    {
      loanNo: "L28U3279",
      loanType: "Home Loan",
      borrower: "Dhanuk Bhattacharyya",
      borrowerAddress: "78/12 Zila Thiruvananthapuram 322543",
      coBorrower: "Ivan Rau",
      coBorrowerAddress: "35/814, Kapoor Zila, Asansol 023995",
      currentDPD: 50,
      sanctionAmount: 1398765,
      region: "North"
    },
    {
      loanNo: "L28U3280",
      loanType: "Car Loan",
      borrower: "Vritika Hayre",
      borrowerAddress: "943 Bansal Sasaram-756954",
      coBorrower: "Sarla Wara",
      coBorrowerAddress: "072 Golla Ganj Muzaffarpur-629844",
      currentDPD: 50,
      sanctionAmount: 2237565,
      region: "North"
    },
    {
        loanNo: "L28U3247",
        loanType: "Home Loan",
        borrower: "Vedika Sachar",
        borrowerAddress: "83 Yogi Ganj, Kadapa-058720",
        coBorrower: "Divit Vora",
        coBorrowerAddress: "24/543, Acharya Path, Ongole-052360",
        currentDPD: 91,
        sanctionAmount: 1934068,
        region: "West"
      },
      {
        loanNo: "L28U3243",
        loanType: "Car Loan",
        borrower: "Hrishita Agrawal",
        borrowerAddress: "86/622, Deo Path, Berhampore 841186",
        coBorrower: "Mahika Tak",
        coBorrowerAddress: "58 Tella Road, Sultan Pur, Majra 919878",
        currentDPD: 100,
        sanctionAmount: 1842143,
        region: "North"
      },
      {
        loanNo: "L28U3250",
        loanType: "Car Loan",
        borrower: "Priyansh Soman",
        borrowerAddress: "H.No. 152 Andra Street, Amritsar-471162",
        coBorrower: "Zaina Dara",
        coBorrowerAddress: "H.No. 42, Srivastava Marg, Junagadh-191124",
        currentDPD: 100,
        sanctionAmount: 4537889,
        region: "East"
      },
      {
        loanNo: "L28U3248",
        loanType: "Home Loan",
        borrower: "Priyansh Chanda",
        borrowerAddress: "24, Ray Chowk, Guntakal 809322",
        coBorrower: "Zain Ghosh",
        coBorrowerAddress: "H.No. 59, Dugar Street, Kolhapur-543900",
        currentDPD: 100,
        sanctionAmount: 2681712,
        region: "West"
      },
      {
        loanNo: "L28U3260",
        loanType: "Home Loan",
        borrower: "Hrishita Sen",
        borrowerAddress: "94/36 Barad, Hubli-Dharwad-408790",
        coBorrower: "Shray Kala",
        coBorrowerAddress: "63/68, Bhardwaj Street, Bokaro 662204",
        currentDPD: 76,
        sanctionAmount: 4456808,
        region: "West"
      },
      {
        loanNo: "L28U3265",
        loanType: "Personal Loan",
        borrower: "Vivaan Virk",
        borrowerAddress: "H.No. 653 Dada Ganj, Ichalkaranji 279923",
        coBorrower: "Elakshi Chahal",
        coBorrowerAddress: "16/45 Diwan Road, Jabalpur 962051",
        currentDPD: 76,
        sanctionAmount: 3863514,
        region: "West"
      },
      {
        loanNo: "L28U3264",
        loanType: "Car Loan",
        borrower: "Nirvaan Mander",
        borrowerAddress: "543 Singhal Street, Bhalswa Jahangirpura",
        coBorrower: "Vihaan Dua",
        coBorrowerAddress: "H.No. 115, Saha Road, Singrauli 049374",
        currentDPD: 90,
        sanctionAmount: 1256883,
        region: "South"
      },
      {
        loanNo: "L28U3266",
        loanType: "Personal Loan",
        borrower: "Nirvi Sahni",
        borrowerAddress: "41/42, Duga, Amroha-741195",
        coBorrower: "Dhanu Lalka",
        coBorrowerAddress: "48/41, Garde Path, Uluberia 709956",
        currentDPD: 75,
        sanctionAmount: 2687368,
        region: "East"
      },
      {
        loanNo: "L28U3267",
        loanType: "Personal Loan",
        borrower: "Samaira Jain",
        borrowerAddress: "79/10 Barad Zila, Thoothukudi 606938",
        coBorrower: "Chirag Tripathi",
        coBorrowerAddress: "23/11 Ravel Street, Panckula-008035",
        currentDPD: 76,
        sanctionAmount: 3617146,
        region: "South"
      },
      {
        loanNo: "L28U3269",
        loanType: "Personal Loan",
        borrower: "Aradhya Jayaram",
        borrowerAddress: "410, Vohra Zila, Moradabad 963541",
        coBorrower: "Shaan Hora",
        coBorrowerAddress: "35/41, Bajaj Nagar, Nagao-504713",
        currentDPD: 76,
        sanctionAmount: 1383439,
        region: "South"
      }
  ];

const btns=['All',"Pre Sarfaesi","NPA",'13(3) Responses',"Symbolic Possession","DM Order","Physical Possession","Auction"]
  
  
const Portfolio=()=>{
  const [allLoans] = useState(loans); // Store the original loan data
  const [Loans, setLoans] = useState(loans);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filterLoan = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setLoans(allLoans); // Reset to original list when search box is cleared
    } else {
      const filtered = allLoans.filter((each) => each.loanNo.toLowerCase().includes(searchTerm));
      setLoans(filtered);
    }
  };


  return (
    <div className="portfolio">
      <p className="header">Portfolio</p>
      <div className="float-btn">
        {btns.map((btn, index) => (
          <button key={index} onClick={() => setSelectedIndex(index)} className={selectedIndex === index ? "btn-color" : "btn"}>
            {btn}
          </button>
        ))}
      </div>
      <div className="filter-search">
        <input type="search" className="input-ele" placeholder="Search Loan Number" onChange={filterLoan} />
        <div>
          <button className="btn">
            Select Columns <IoIosArrowDown size={14} />
          </button>
          <button className="btn-color">
            <AiOutlineFilter size={14} /> More filters
          </button>
        </div>
      </div>

      <p className="filer-list">{Loans.length} Loans found</p>
      {Loans.length > 0 ? (
        <table className="loan-table">
          <thead className="table-header">
            <tr>
              {[<AiOutlineCheckSquare size={14} />, "LoanNo", "Loan Type", "Borrower", "Borrower Address", "Co Borrower", "Co Borrower Address", "Current DPD", "Sanction Amount", "Region"].map(
                (field, index) => (
                  <th key={index}>{field}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Loans.map((loan) => (
              <tr key={loan.loanNo} className="table-row">
                <td>
                  <input type="checkbox" />
                </td>
                <td>{loan.loanNo}</td>
                <td>{loan.loanType}</td>
                <td>{loan.borrower}</td>
                <td>{loan.borrowerAddress}</td>
                <td>{loan.coBorrower}</td>
                <td>{loan.coBorrowerAddress}</td>
                <td>{loan.currentDPD}</td>
                <td>{loan.sanctionAmount}</td>
                <td>{loan.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Portfolio;