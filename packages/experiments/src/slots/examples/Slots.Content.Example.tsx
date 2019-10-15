import * as React from 'react';
import { Button } from '@uifabric/experiments';
import { IStackProps, Spinner, Stack, Text } from 'office-ui-fabric-react';

const stackProps: IStackProps = { tokens: { childrenGap: 16 }, padding: 8, maxWidth: 400 };

// tslint:disable:jsx-no-lambda
// tslint:disable:jsx-key
export class SlotsContentExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack {...stackProps}>
        <Button content={1}>
          <p>Content: Integer</p>
        </Button>
        <Button content="Content: String" />
        <Button content={{ weight: 'bold', children: 'Content: Props, weight: bold' }} />
        <Button content={() => <Spinner />}>
          <p>Content: Function, Spinner</p>
        </Button>
        <Button
          content={render =>
            render((ContentType, contentProps) => (
              <b>
                Content: <ContentType {...contentProps}>TextType</ContentType>
              </b>
            ))
          }
        >
          <p>Content: Function, Text + ContentType</p>
        </Button>
        <Button content={{ children: 'Content: Child String' }} />
        <Button content={{ children: ['Content: Child 1,', ' Child 2'] }} />
        <Button content={<Text>Content: JSX Element</Text>} />
        <Button content="Content: With Children">
          <p>Button Child 1</p>
          <p>Button Child 2</p>
        </Button>
      </Stack>
    );
  }
}
