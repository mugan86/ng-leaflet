import { Story, Meta, moduleMetadata, storiesOf } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';

export default {
    title: 'Map Basics/1-Basic',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
        componentSubtitle: 'Displays an image that represents a user or organization',
    },
    argTypes: {
        /**
         * Controls options. Not show values in table
         * https://storybook.js.org/docs/angular/essentials/controls
         */
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
            table: {
                disable: true
            }
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

export const First = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
First.args = {
    mapId: 'first__map',
    size: {
        height: '500px',
        width: '100%'
    },
};


