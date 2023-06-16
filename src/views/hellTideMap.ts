import {APIEmbed} from 'discord.js';
import { author } from './shared';

const url = 'https://i.imgur.com/N8jNkrp.jpeg';

const hellTideMap = () => {
  const description =
    ``;
  const text =
    'by @LeonRdo#4563 - ' +
    `Need a custom bot? Email me at noel@paysly.io, or hop into the discord server listed above and DM me.`;
  const embed: APIEmbed = {
    title: 'Helltide Mystery Chest Map',
    url,
    author,
    description,
    image: {
      url
    },
    footer: {
      text,
      icon_url: 'https://ethos-chat.pages.dev/yoshi.webp',
    },
    fields: [
      {
        name: 'Zones',
        value: 'One mystery chest is available in each map zone during a helltide.'
      },
      {
        name: 'Locations',
        value: 'Mystery chests are not visible on the overwold map until very close, only your minimap.'
      },
      {
        name: '',
        value: 'Mystery chests move locations when real time clock hits a full hour in each zone. When this happens, mystery chests can be reopened in the new location, allowing you to get more than two during one helltide.'
      },
      {
        name: '',
        value: `The \`/events\` command can be used to get notifications on upcoming helltides.`
      }
    ]
  };

  return embed;
};

export default hellTideMap;