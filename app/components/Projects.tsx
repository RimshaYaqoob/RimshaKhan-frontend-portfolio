import React from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {

  const projects = [
    {
      slug: 'union-health-solution',
      title: 'Union Health Solution (UHS)',
      description:
        'Healthcare management solution with patient handling, role-based access control, and reporting modules.',
      role:
        'Frontend Developer – Integrated APIs, implemented role-based access control, and ensured exact UI implementation according to provided design.',
      figmaLink:
        'https://drive.google.com/file/d/your-uhs-pdf-link/view',
      githubLink:
        'https://github.com/yourusername/union-health-solution',
      image: '/images/uhs.png',
    },

    {
      slug: 'maxremind-chats',
      title: 'MaxRemind Chats',
      description:
        'A chat application with real-time messaging and reminder features built on the MERN stack.',
      role:
        'Frontend Developer – Designed UI in React, implemented real-time chat using WebSockets, and integrated reminder APIs.',
      figmaLink:
        'https://www.figma.com/design/phWWGECUvXXxHIKCdXMb3C/MaxRemind-Chats',
      githubLink:
        'https://github.com/MaxRemindPrvt/communication-center-React',
      image: '/images/communication.png', // chat/communication image
    },
    {
      slug: 'maxstats',
      title: 'MaxStats',
      description:
        'Interactive analytics dashboard for visualizing real-time performance metrics and statistics.',
      role:
        'Full-Stack Developer – Built charts with Recharts & Chart.js, integrated APIs, and handled backend data management.',
      figmaLink:
        'https://www.figma.com/design/6gb3WsQLcOHs0rhCWW4RoE/MaxStats',
      githubLink:
        'https://github.com/MaxRemindPrvt/Max-Stats',
      image: '/images/stats.png', // stats dashboard image
    },


          {
  slug: 'Real Estate App',
  title: 'Real Estate App',
  description:
    'A real estate application for property listings, user profiles, and property management.',
  role:
    'Frontend Developer – Developed UI components, and implemented responsive design ,Responsive Design Tailwind CSS, Context ApI, AOS Library for animation.',
  DemoLink: 'https://real-estate-application-brown.vercel.app/',

  githubLink:
    'https://github.com/RimshaYaqoob/Real-Estate-Application',
    image: '/images/Real-estate.png',
},

       {
  slug: 'remote-patient-monitoring',
  title: 'Remote Patient Monitoring (RPM)',
  description:
    'A healthcare monitoring system that manages patient records, real-time health readings, and patient status including RPM Active, CCM Active, and Inactive patients.',
  role:
    'Frontend Developer – Developed the patient module, integrated APIs, optimized data loading, and implemented efficient display of real-time readings and assigned devices.',
  figmaLink:
    'https://www.figma.com/design/rpm-project-link',
  githubLink:
    'https://github.com/yourusername/remote-patient-monitoring',
  video: '/videos/RPM.mp4', 
}

  ];
  

  return (
    <section id="projects" className="pt-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
