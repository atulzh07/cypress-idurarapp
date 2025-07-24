const companies = {
  url: "https://cloud.idurarapp.com/company",
  selectors: {
    companiesPageHeader: '[class^="ant-page-header-heading-title"]',
    addCompanyButton: '[class^="ant-btn "][class$="ant-btn-variant-solid"]',
    nameField: 'input[id="name"]',
    emailField: 'input[placeholder="email@example.com"]',
    submitButton: 'button[type="submit"]',
    companyName: 'td[class="ant-table-cell"]',
    drawerClose: ".ant-drawer-close",
    dropdownMenu: '[class$="ant-table-cell-fix-right-first"]',
    editButton: 'span[class="ant-dropdown-menu-title-content"]',
    numberSelector: 'input[placeholder = "+1 123 456 789"]',
    deleteButton: 'span[aria-label="delete"]',
    deleteModalHeader: ".ant-modal-header",
    deleteModalBody: ".ant-modal-body",
  },
};

export default companies;
