# Portfolio CMS Guide

This guide explains how to manage the content of your portfolio website.

## 📁 File Structure

All content is managed through JSON files located in the `/data` folder:

```
/data
  ├── projects.json        # Project portfolio data
  ├── education.json       # Education/Resume information
  └── certifications.json  # Certifications and training
```

## 📄 Resume Upload

To add your resume PDF:

1. Create a folder named `public` in the root directory (if it doesn't exist)
2. Upload your resume file as `/public/resume.pdf`
3. The "Download Resume" button will automatically link to this file

**File location:** `/public/resume.pdf`

## 🎨 Managing Projects

### Edit Projects
Open `/data/projects.json` and modify the project array.

### Project Structure
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Full description",
  "shortDescription": "Brief description for cards",
  "image": "https://image-url.com/image.jpg",
  "category": "Category Name",
  "technologies": ["Tech1", "Tech2"],
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://example.com",
  "linkedinUrl": "https://linkedin.com/post/...",
  "detailedDescription": "Extended description for detail page",
  "features": ["Feature 1", "Feature 2"],
  "challenges": "What challenges you faced",
  "solution": "How you solved them",
  "gallery": [
    "https://image1.jpg",
    "https://image2.jpg"
  ]
}
```

### Optional Fields
- `githubUrl` - Link to GitHub repository
- `liveUrl` - Link to live demo
- `linkedinUrl` - Link to LinkedIn post
- `features` - Array of key features
- `challenges` - Description of challenges
- `solution` - How you solved the challenges
- `gallery` - Array of additional images

### Adding Images
You can use:
1. **External URLs** (from Unsplash, etc.)
2. **Local images** - Upload to `/public/images/` and reference as `/images/filename.jpg`

## 🎓 Managing Education

Edit `/data/education.json`:

```json
{
  "id": "unique-id",
  "degree": "Degree Name",
  "field": "Field of Study",
  "institution": "University Name",
  "location": "City, State/Country",
  "startDate": "2014",
  "endDate": "2018",
  "description": "What you studied",
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

## 🏆 Managing Certifications

Edit `/data/certifications.json`:

```json
{
  "id": "unique-id",
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "date": "2023",
  "credentialId": "Credential ID",
  "credentialUrl": "https://credential-url.com",
  "description": "What this certification covers",
  "logo": "https://logo-url.jpg"
}
```

## 🖼️ Image Guidelines

### Recommended Image Sizes
- **Project thumbnails:** 800x600px
- **Project gallery:** 1200x800px
- **Certification logos:** 200x200px

### Free Image Sources
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos

## 📱 Social Links

Update social links in `/components/HeroSection.tsx`:

```typescript
{ icon: Github, href: "https://github.com/yourusername" },
{ icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
{ icon: Mail, href: "mailto:your.email@example.com" }
```

## 🔄 How to Update Content

1. **Edit JSON files** in `/data` folder
2. Save the changes
3. The website will automatically update

## 💡 Tips

- Keep descriptions concise and engaging
- Use high-quality images
- Update external links regularly
- Keep credential IDs accurate
- Test all links before publishing

## 🚀 Common Tasks

### Add a New Project
1. Open `/data/projects.json`
2. Copy an existing project object
3. Update all fields with your new project data
4. Save the file

### Update Education
1. Open `/data/education.json`
2. Modify the education entries
3. Save the file

### Add a Certification
1. Open `/data/certifications.json`
2. Add a new certification object
3. Save the file

---

**Note:** All changes to JSON files take effect immediately. No build or deployment needed!
