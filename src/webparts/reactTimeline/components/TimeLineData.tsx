/*import { ISPList } from '../ReactTimelineWebPart';

export default class TimeLineData {

  public static _items: ISPList[] = [
    {
      Title: "The Early Years",
      cardTitle: "Establishing the culture",
      Image: "test",
      cardDetailedText: `From the very beginning, Robins & Morton established a company culture based on a commitment to clients, a drive to exceed expectations, a desire to learn and grow, and a mutual respect among our team members. That culture would later form the basis of Building Forward.`
    },
    {
      Title: "1980s",
      cardTitle: "Moving to collaboration ",
      Image: "test",
      cardDetailedText: `Robins & Morton shifts its business model to a partnering approach. By consistently fostering collaboration instead of the adversarial relationships of hard-bid, low-price models, Robins & Morton created an environment of teamwork that extended beyond the company to include everyone working on a project.`
    },
    {
      Title: "Early 2010s",
      cardTitle: "Bringing culture and process together",
      Image: "test",
      cardDetailedText: `Events at two jobsites 1,600 miles apart organically set in a motion a grassroots effort within our company. One team was focused on culture, teamwork and engagement, the other concentrated on adopting Lean tools and philosophies. Both projects learned from each other, ultimately sharing those ideas with other projects. Bringing culture and process together yielded improvements in project delivery.`
    }
  ];

  public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
      resolve(TimeLineData._items);
    });
  }
}*/

const items = [
    {
      title: "The Early Years",
      cardTitle: "Establishing the culture",
      media: {
        name: "Photo from page 20 of 70-year book",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/Asset8.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `From the very beginning, Robins & Morton established a company culture based on a commitment to clients, a drive to exceed expectations, a desire to learn and grow, and a mutual respect among our team members. That culture would later form the basis of Building Forward.`
    },
    {
      title: "1980s",
      cardTitle: "Moving to collaboration",
      media: {
        name: "Suggest early HCA project",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/Asset%207.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `Robins & Morton shifts its business model to a partnering approach. By consistently fostering collaboration instead of the adversarial relationships of hard-bid, low-price models, Robins & Morton created an environment of teamwork that extended beyond the company to include everyone working on a project.`
    },
    {
      title: "Early 2010s",
      cardTitle: "Bringing culture and process together",
      media: {
        name: "MaineGeneral (1066) shot showing people",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/photo%202.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `Events at two jobsites 1,600 miles apart organically set in a motion a grassroots effort within our company. One team was focused on culture, teamwork and engagement, the other concentrated on adopting Lean tools and philosophies. Both projects learned from each other, ultimately sharing those ideas with other projects. Bringing culture and process together yielded improvements in project delivery.`
    },
    {
      title: "Mid 2010s",
      cardTitle: "Formalizing the movement",
      media: {
        name: "",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/1407_N598.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `In true collaborative fashion, a steering committee representing a wide range of experience, age, opinions and job titles identified the four tents that would guide a new continuous improvement initiative: Collaboration, Continuous Improvement, Leadership Development and Creating a Learning Culture.
      Within a year, the movement had a name – Building Forward. 
      Onboarding and alignment meetings at multiple locations expanded the awareness of Building Forward.`
    },
    {
      title: "2018",
      cardTitle: "Building momentum while staying true to Robins & Morton",
      media: {
        name: "",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/1606_N106.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `The first Introduction to Building Forward classes were held, supporting the move toward Lean Construction while emphasizing its integration with our company’s culture and values.`
    },
    {
      title: "2019",
      cardTitle: "Connecting everyone with Building Forward",
      media: {
        name: "Building Forward Connect event photo showing banner",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/6A4A9398.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `The inaugural Building Forward connect event in Orlando, Florida, brought together more than 600 Robins & Morton team members, clients and industry partners to share best practices, success stories and lessons learned.`
    },
    {
      title: "2020",
      cardTitle: "Increasing advocacy and support",
      media: {
        name: "SHOT OF STAND-UP BOARD AT MBCC",
        source: {
          url: "https://robinsmorton-my.sharepoint.com/personal/rmcon06_robinsmorton_com/Documents/BFTimelineImages/Robins%20&%20Morton%204-15-20.jpg"
        },
        type: "IMAGE"
      },
      cardDetailedText: `The widespread involvement of team members in Building Forward Resource Groups and as Building Forward advocates increased the number of people supporting Building Forward throughout the company, further driving engagement and implementation.`
    }
  ];
  
export default items;