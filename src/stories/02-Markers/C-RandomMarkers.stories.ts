import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';

export default {
    title: 'Map Basics/Random Markers',
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
                disable: false
            }
        },
        size: {
            table: {
                disable: false
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

export const Second = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Second.args = {
    mapId: 'random-markers__map',
    size: {
        height: '400px',
        width: '100%'
    },
    config: {
        zoom: {
            position: 'bottomleft'
        }
    }
};


