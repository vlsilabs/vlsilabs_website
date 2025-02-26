// import { faPersonHiking, faMountain, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const PAGES = [
    {
        key: 'home',
        name: 'Home',
        new_tab: false,
        path: '/home'
    },
    {
        key: 'about_us',
        name: 'About Us',
        new_tab: false,
        path: '/about_us'
    },
    {
        key: 'courses',
        name: 'Courses',
        new_tab: false,
        path: '/courses'
    },
    {
        key: 'contact_us',
        name: 'Contact Us',
        new_tab: true,
        path: 'https://docs.google.com/forms/d/1FejiDdebM7keahN_YdViaRZ3RWTrbvfsYddDY6zpFjc/viewform?edit_requested=true'
    },
    // {
    //     key: 'log_in',
    //     name: 'Log in',
    //     path: '/log_in'
    // }
];

export const REASONS_TO_CHOOSE = [
    {
        icon: HikingIcon,
        title: 'Seamless Transition',
        content:
            'We understands the challenges students face when transitioning from college to the professional world. We bridge the gap between academic knowledge and practical skills, ensuring a seamless transition that prepares you for real-world challenges.',
    },
    {
        icon: LandscapeIcon,
        title: 'Empowering the Future',
        content:
            'Our mission is to empower the next generation of professionals. We provide you with the tools, knowledge, and confidence required to thrive in an ever-evolving global landscape. We are committed to shaping future leaders and innovators.',
    },
    {
        icon: EngineeringIcon,
        title: 'Innovative Learning',
        content:
            'We offers an innovative e-learning platform meticulously designed to equip students with real-world problem-solving abilities. Our approach ensures that you not only excel in your career but also make meaningful contributions to society. Choose us for transformative and practical education.',
    },
];

export const INDURSTRIES = [
    {
      id: 1,
      title: 'Semiconductor',
      image_url: 'assets/courses_page/semiconductor.jpg',
      href_link: '/courses/semiconductor'
    }
];

export const SEMICONDUCTOR_COURSES = [
    {
        id: 'id1',
        char: 'DV',
        title: 'Design Verification',
        description: 'Master industry-grade logic verification with Verilog, SystemVerilog, and UVM. Build on your digital proficiency and tackle real-world VLSI verification challenges. Elevate your career in VLSI design verification with our comprehensive course.',
        tenure: '3 months',
        industry_type: 'SEMICONDUCTOR',
    },
    {
        id: 'id2',
        char: 'DFT',
        title: 'Design For Testability',
        description: 'Unlock the secrets of VLSI chip testing and ensure faultless designs. Master DFT techniques for industry-grade semiconductor projects. Elevate your VLSI career with our comprehensive course in Design for Testability and become a sought-after expert in chip verification.',
        industry_type: 'SEMICONDUCTOR',
        tenure: '3 months',
    },
    {
        id: 'id3',
        char: 'PD',
        title: 'Physical Design',
        description: 'Master the art of silicon chip crafting, layout techniques, and industry project challenges. Elevate your VLSI career with our comprehensive course. Join us to excel in the world of Physical Design, where innovation meets silicon reality.',
        industry_type: 'SEMICONDUCTOR',
        tenure: '3 months',
    },
];

export const SOFTWARE_COURSES = [
    {
        id: 'id4',
        char: 'MERN',
        title: 'MERN Stack',
        description: 'Master MongoDB, Express.js, React.js, and Node.js to build dynamic web applications. Gain hands-on experience with real projects and elevate your web development skills. Excel in the world of MERN stack development with our comprehensive course.',
        tenure: '3 months',
        industry_type: 'SOFTWARE',
    }
];

export const INDUSTRIES_PAGES = [
    { label: "Semiconductor", path: "/courses/semiconductor" }
];

export const TESTIMONIALS = [{
    key: 'id1',
    content: 'Thanks to their guidance, I successfully transitioned from the electrical domain to VLSI. Their dedicated team provided invaluable support in crafting my resume, conducting mock interviews, and preparing for real interviews. Highly recommended!',
    author: 'Divya Khanduri',
    current_company: 'Intel'
}, {
    key: 'id2',
    content: 'Moving from electrical engineering to the VLSI field can be a daunting task, but Kumar Bh\'s guidance has proven invaluable. His assistance in preparation and conducting mock interviews has been instrumental in my transition.',
    author: 'Jagmal Singh',
    current_company: 'Intel'
}, {
    key: 'id3',
    content: 'Their support was instrumental in securing an internship during my M.Tech program. Their exceptional mentorship made all the difference, with their consistent availability for guidance, including invaluable resume corrections.',
    author: 'Monu Kumar',
    current_company: 'Proxelera'
}, {
    key: 'id4',
    content: 'It was an amazing experience, with a focus on the key points that are commonly asked during interviews.',
    author: 'Pritish Sharma',
    current_company: 'LTTS'
}, {
    key: 'id5',
    content: 'Your guidance has been immensely helpful in shaping my career.',
    author: 'Himanshu Kandwal',
    current_company: 'Proxelera'
}]


