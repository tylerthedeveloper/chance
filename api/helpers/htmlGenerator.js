const htmlHeader =`
  <h1> Charges </h1>
`;

// todo: format date
// todo: format type
// todo: format amount

const fillTemplate = (charge) => {
  const { id, name, amount, date, description, type } = charge;
  const htmlTemplate =`
    <div style="border:1px solid #000;">
      <h2> Name: ${name} </h2>
      <p> <strong> ID: </strong> ${id} </p>
      <p> <strong> Charge Date:</strong> ${date} </p>
      <p> <strong> Amount:</strong> ${amount} </p>
      <p> <strong> Description:</strong> ${description} </p>
      <p> <strong> Type:</strong> ${type} </p> 
    </div> <br />
  `;
  return htmlTemplate;
};

const generateHTML = (charges) => {
  let html = htmlHeader;
  charges.map(charge => {
    const chargeHtml = fillTemplate(charge);
    html += chargeHtml;
  });
  return html;
};

module.exports = {
    generateHTML: generateHTML
};