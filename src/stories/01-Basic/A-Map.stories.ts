import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';
export default {
    title: 'Map Basics/Basic',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
        componentSubtitle: 'Show basic map with 100% width and 600px heigth. Set with default location in Gipuzkoa (Spain) and use Open Street Map Default map',
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

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
    mapId: 'first__map',
    size: {
        height: '600px',
        width: '100%'
    },
};


