# Software Engineer Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient designs and smooth animations
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Interactive Elements**: Animated skill bars, hover effects, and fade-in animations
- **Contact Form**: Functional contact form with validation
- **Mobile Menu**: Hamburger menu for mobile navigation

## Sections Included

1. **Introduction/About Me**: Personal introduction and background
2. **Programming Languages**: Display of programming languages with skill levels
3. **Skills & Technologies**: Technical skills and tools
4. **Work Experience**: Timeline of professional experience
5. **Projects**: Showcase of featured projects
6. **Education**: Educational background and certifications
7. **Achievements**: Awards and accomplishments
8. **Contact/Reach Me**: Contact information and form

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize Content**: 
   - Edit `index.html` to update your personal information
   - Replace placeholder text with your actual details
   - Update social media links
   - Add your own projects and experiences

3. **Customize Styling**:
   - Modify `styles.css` to change colors, fonts, or layout
   - Color scheme is defined in CSS variables at the top of `styles.css`

4. **Add Functionality**:
   - The contact form currently shows a success message
   - To make it functional, update the form submission handler in `script.js`
   - You can integrate it with a backend service or email service

## Customization Tips

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... */
}
```

### Adding Your Photo
Replace the placeholder icon in the hero section with your actual photo:
```html
<div class="hero-image">
    <img src="your-photo.jpg" alt="Your Name" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

### Updating Social Links
Replace the `#` in social media links with your actual profile URLs:
```html
<a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this portfolio template for your personal website!

