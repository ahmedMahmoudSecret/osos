import React from 'react'
import Ui from './Ui'

export default function CalendarDate() {
  const EventsDatesString = [
    'Tue Nov 07 2023 00:00:00 GMT+0200 (Eastern European Standard Time)',
    'Tue Nov 08 2023 00:00:00 GMT+0200 (Eastern European Standard Time)',
    'Tue Nov 09 2023 00:00:00 GMT+0200 (Eastern European Standard Time)',
    'Tue Nov 10 2023 00:00:00 GMT+0200 (Eastern European Standard Time)',
  ]

  const eventData = [
    {
      avatars: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
      ],
      title: 'Design Daily Standup',
      from: '3:00 PM',
      to: '5:00 PM',
    },
    {
      avatars: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
      ],
      title: 'Design Daily Standup',
      from: '3:00 PM',
      to: '5:00 PM',
    },
    {
      avatars: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
      ],
      title: 'Design Daily Standup',
      from: '3:00 PM',
      to: '5:00 PM',
    },
    {
      avatars: [
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
        'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
        'https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png',
        'https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png',
        'https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png',
        'https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png',
      ],
      title: 'Design Daily Standup',
      from: '3:00 PM',
      to: '5:00 PM',
    },
  ]

  return <Ui EventsDatesString={EventsDatesString} eventData={eventData} />
}
