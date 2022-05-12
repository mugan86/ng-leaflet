import { Story, Meta, moduleMetadata, storiesOf } from '@storybook/angular';
import { NgLeafletModule, MapComponent } from '@mugan86/ng-leaflet';

export default {
    title: 'Map Basics/3-RandomMarkers',
    component: MapComponent,
    decorators: [
        moduleMetadata({
            imports: [NgLeafletModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
      },
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
  randomMarkers: true
};


