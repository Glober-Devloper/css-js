interface Section {
  heading: string;
  content: string;
  syntax?: string;
  explanation?: string;
}

interface TopicData {
  [key: string]: Section[];
}

interface UnitData {
  title: string;
  duration: string;
  overview: string[];
  topics: TopicData;
}

export async function generatePDF(unitTitle: string, content: UnitData) {
  const doc = document.implementation.createHTMLDocument('PDF Export');
  const style = doc.createElement('style');

  style.textContent = `
    @page { margin: 2cm; }
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 210mm;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #1e40af;
      border-bottom: 3px solid #3b82f6;
      padding-bottom: 10px;
      margin-top: 0;
    }
    h2 {
      color: #1e40af;
      margin-top: 30px;
      page-break-before: always;
    }
    h3 {
      color: #475569;
      margin-top: 20px;
    }
    .meta {
      background: #f1f5f9;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
    }
    .overview {
      background: #eff6ff;
      padding: 15px;
      border-left: 4px solid #3b82f6;
      margin: 20px 0;
    }
    .content-section {
      margin: 25px 0;
      page-break-inside: avoid;
    }
    .syntax {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 5px;
      font-family: 'Courier New', monospace;
      font-size: 13px;
      white-space: pre-wrap;
      margin: 15px 0;
      page-break-inside: avoid;
    }
    .explanation {
      background: #eff6ff;
      border-left: 4px solid #3b82f6;
      padding: 12px;
      margin: 15px 0;
      font-style: italic;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e2e8f0;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    }
    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  `;

  doc.head.appendChild(style);

  const body = doc.body;

  body.innerHTML = `
    <h1>${unitTitle}: ${content.title}</h1>
    <div class="meta">
      <p><strong>Duration:</strong> ${content.duration}</p>
      <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
    </div>

    <div class="overview">
      <h3>Overview - What You'll Learn:</h3>
      <ul>
        ${content.overview.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>

    ${Object.entries(content.topics).map(([topicName, sections]) => `
      <h2>${topicName}</h2>
      ${sections.map((section, idx) => `
        <div class="content-section">
          <h3>${idx + 1}. ${section.heading}</h3>
          <p>${section.content}</p>
          ${section.syntax ? `
            <div class="syntax">${section.syntax}</div>
          ` : ''}
          ${section.explanation ? `
            <div class="explanation">
              <strong>Explanation:</strong> ${section.explanation}
            </div>
          ` : ''}
        </div>
      `).join('')}
    `).join('')}

    <div class="footer">
      <p>Web Technologies eBook - Comprehensive Learning Resource</p>
      <p>This document contains detailed theory notes for ${unitTitle}</p>
    </div>
  `;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download PDF');
    return;
  }

  printWindow.document.write('<!DOCTYPE html>');
  printWindow.document.write('<html><head>');
  printWindow.document.write(`<title>${unitTitle} - Notes</title>`);
  printWindow.document.write(doc.head.innerHTML);
  printWindow.document.write('</head><body>');
  printWindow.document.write(body.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();

  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };
}
