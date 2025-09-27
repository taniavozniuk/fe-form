# Frontend Engineer Form

This project is a Frontend Engineer registration form built with React, TypeScript, and Material UI (MUI). The form demonstrates form validation, dynamic field dependencies, and handling of multiple selections using hooks.

The FE Version field is disabled by default and becomes active once a framework is selected.
Email validation is done on submit, and a specific email (test@test.test) is rejected to simulate a server response.
Hobbies field allows multiple selections, and at least one hobby must be selected.

## Features

- Reactive form using React hooks
- Material UI components for modern styling
- Validation for all required fields
- Dynamic FE version field enabled only after selecting a framework
- Multiple hobbies selection with validation
- Email uniqueness check (simulated server call for test@test.test)
- Form submission logs JSON data to the console
- Clear form functionality resets all fields and errors

## Form Fields

1. Name – Required
2. Last Name – Required
3. Date of Birth – Required, uses MUI DatePicker
4. FE Technology – Required, select from Angular, React, Vue
5. FE Technology Version – Required, dependent on FE Technology selection
6. Email – Required, must be valid, test@test.test triggers an error
7. Hobbies – Required, allows multiple selections

## Installation

1. Clone the repository:

```bash
git clone https://github.com/taniavozniuk/fe-form.git
cd fe-form
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the project:

```bash
npm run dev
# or
yarn run dev
```
