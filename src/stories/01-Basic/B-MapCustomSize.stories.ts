import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';

export default {
    title: 'Map Basics/Custom Size',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
        componentTitle: 'eee',
        componentSubtitle: 'Displays an image that represents a user or organization',
      },
      argTypes: {
        /**
         * Controls options. Not show values in table
         * https://storybook.js.org/docs/angular/essentials/controls
         */
        mapId: {
            //name: 'Identify Map reference',
            description: 'This value must be UNIQUE in select page.',
            defaultValue: 'map'
        },
        markers: {
            table: {
                disable: true
            }
        },
        randomMarkers: {
            table: {
                disable: true
            }
        },
        size: {
            control: {
                type: 'object'
            },
            table: {
                disable: false
            },
            description: 'Map Size to show in page. Height NOT set with % values',
            // defaultValue: 'map'
        },
        config: {
            table: {
                disable: true
            }
        }
    }
} as Meta;

const Template: Story<MapComponent> = (args: MapComponent) => ({
    props: args,
});

export const W80Per300px = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
W80Per300px.args = {
    mapId: 'w80_300px',
  size: {
      height: '300px',
      width: '80%'
  }
};

export const W50Per200px = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
W50Per200px.args = {
    mapId: 'w50_200px',
  size: {
      height: '200px',
      width: '50%'
  }
};
export const W50Per500px = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
W50Per500px.args = {
    mapId: 'w50_500px',
  size: {
      height: '500px',
      width: '50%'
  }
};



