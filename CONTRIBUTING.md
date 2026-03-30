# Contributing

Contributions to this project are [released](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) to the public under the [project's open source license](LICENSE).

Everyone is welcome to contribute to this project. Contributing doesn't just mean submitting pull requests—there are many different ways for you to get involved, including answering questions, reporting issues, improving documentation, or suggesting new features.

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in the [GitHub Issues](https://github.com/orassayag/world-covid-19-data-nextjs/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots or error messages (if applicable)
   - Your environment details (OS, Node version, browser)

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes following the code style guidelines below
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Push to your fork and submit a pull request

### Code Style Guidelines

This project uses:
- **React 18** with functional components and hooks
- **Next.js 13** for server-side rendering and routing
- **Redux Toolkit** for state management
- **ESLint** with Airbnb config for code quality
- **SASS/SCSS** for styling

Before submitting:
```bash
# Check for linting errors
npm run lint

# Build to ensure no errors
npm run build

# Test the application
npm run dev
```

### Coding Standards

1. **Component Structure**: Use functional components with hooks
2. **State Management**: Use Redux Toolkit slices for global state
3. **Styling**: Use SCSS modules with BEM-like naming conventions
4. **File Organization**: Follow the existing structure (components, services, utils, etc.)
5. **No Inline Styles**: Use ESLint plugin to prevent inline styles
6. **Security**: Follow ESLint security plugin rules
7. **Comments**: Add explanatory comments for complex logic
8. **Naming**: Use clear, descriptive names for variables and functions

### Project Structure

When adding new features:
1. **Components**: Place in `src/components/` with appropriate subfolder structure
2. **Services**: Add business logic in `src/services/files/`
3. **Redux Slices**: Create/update in `src/store/slices/flies/`
4. **Models**: Define data models in `src/core/models/files/`
5. **Enums**: Add constants in `src/core/enums/files/`
6. **Utils**: Place utility functions in `src/utils/files/`
7. **Styles**: Create SCSS modules alongside components

### Adding New Data Sources

When adding a new COVID-19 API source:
1. Add the API URL to `src/settings/settings.js`
2. Create a source enum in `src/core/enums/files/sources.enums.js`
3. Add source metadata in `src/data/files/sources.data.js`
4. Implement parsing logic in `src/services/files/source.service.js`
5. Update country matching in `src/services/files/country.service.js`
6. Test with both live and local modes

### Testing Guidelines

1. Test in both development and production modes
2. Verify data fetching from all sources
3. Check modal interactions and state updates
4. Test sorting, filtering, and search functionality
5. Validate statistics tracking and updates
6. Ensure responsive design works on different screen sizes

## Questions or Need Help?

Please feel free to contact me with any question, comment, pull-request, issue, or any other thing you have in mind.

* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag

Thank you for contributing! 🙏
