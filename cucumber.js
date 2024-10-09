module.exports = {
    default: {
      require: [
        'src/tests/steps/*.ts',  // Tus step definitions
        'src/hooks/*.ts'             // Incluye el archivo de hooks
      ],
      requireModule: [
        "ts-node/register"
    ], 
      parallel: 1,      // Ejecuta con ts-node
      format: [
        "summary",
        "progress",
        "html:test-results/cucumber-report.html",
        "json:test-results/cucumber-report.json"
    ],
      paths: ['src/tests/features/login.feature','src/tests/features/addEmployee.feature']
    }
        
  };
  