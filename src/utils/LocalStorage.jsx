const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Website Homepage",
        taskDescription: "Redesign the hero section and improve mobile responsiveness.",
        taskDate: "2025-02-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the issue where users are unable to login with correct credentials.",
        taskDate: "2025-01-28",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Marketing Banner",
        taskDescription: "Design a banner for the upcoming product launch campaign.",
        taskDate: "2025-02-05",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document all the endpoints of the user service.",
        taskDate: "2025-02-18",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Dark Mode",
        taskDescription: "Add dark mode support across the entire application.",
        taskDate: "2025-02-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting Preparation",
        taskDescription: "Prepare slides and demo for the client presentation.",
        taskDate: "2025-02-01",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database Queries",
        taskDescription: "Improve the performance of slow SQL queries in the reports module.",
        taskDate: "2025-02-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Social Media Posts",
        taskDescription: "Create 10 posts for Instagram and LinkedIn for product launch.",
        taskDate: "2025-02-08",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests of the authentication module.",
        taskDate: "2025-01-30",
        category: "Development"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Mobile App Screens",
        taskDescription: "Create high-fidelity designs for the new mobile application.",
        taskDate: "2025-02-14",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions for automatic testing and deployment.",
        taskDate: "2025-02-17",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Feedback Analysis",
        taskDescription: "Analyze feedback received from the last beta release.",
        taskDate: "2025-02-03",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email Newsletter Design",
        taskDescription: "Design the monthly newsletter template.",
        taskDate: "2025-02-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Navbar is overlapping content on tablet screens.",
        taskDate: "2025-01-25",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Onboarding Flow",
        taskDescription: "Design and develop the new user onboarding screens.",
        taskDate: "2025-02-22",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Increase test coverage of the payment module to 80%.",
        taskDate: "2025-02-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Privacy Policy",
        taskDescription: "Update the privacy policy page according to new regulations.",
        taskDate: "2025-02-02",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance Optimization",
        taskDescription: "Reduce the initial load time of the dashboard below 2 seconds.",
        taskDate: "2025-02-19",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Create Product Demo Video",
        taskDescription: "Record and edit a demo video for the new features.",
        taskDate: "2025-02-07",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup Setup",
        taskDescription: "Configure automatic daily backups for the production database.",
        taskDate: "2025-01-29",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Refactor Auth Module",
        taskDescription: "Clean up and refactor the authentication related code.",
        taskDate: "2025-02-21",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Competitor Analysis",
        taskDescription: "Research and document features of top 5 competitors.",
        taskDate: "2025-02-04",
        category: "Research"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Notification System",
        taskDescription: "Implement real-time notifications using websockets.",
        taskDate: "2025-02-13",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page for the new product.",
        taskDate: "2025-02-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Payment Gateway Issue",
        taskDescription: "Resolve the bug causing failed transactions on mobile.",
        taskDate: "2025-01-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write Blog Post",
        taskDescription: "Write a blog post about the new features released this month.",
        taskDate: "2025-02-09",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Monitoring",
        taskDescription: "Integrate error tracking and performance monitoring tools.",
        taskDate: "2025-02-01",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve Accessibility",
        taskDescription: "Make the application more accessible according to WCAG guidelines.",
        taskDate: "2025-02-23",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Style Guide",
        taskDescription: "Document the design system and component library.",
        taskDate: "2025-01-31",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Organize Team Meetup",
        taskDescription: "Plan and organize the monthly team building event.",
        taskDate: "2025-02-10",
        category: "Management"
      }
    ]
  }
]

const admin = [{
  id: 1,
  email: "admin@example.com",
  password: "123"
}
]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return(employees, admin)

    
    
}

