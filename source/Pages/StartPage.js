import React, { Component } from 'react';
import { Container} from 'native-base';
// Components
import { TitleStartPage, MonthCalendar } from '../Components';


export default class StartPage extends Component {
    static navigationOptions = {
        title:            'Super Film'.toUpperCase(),
        headerTitleStyle: { alignSelf: 'center' },
    };

    render () {
        const { navigate } = this.props.navigation;
        const _showDay = (day) => {
            navigate('ShowDays', {
                previewDay: day,
            });
        };

        return (
            <Container>
                <TitleStartPage/>
                <MonthCalendar
                    showDay = { _showDay }
                />
            </Container>
        );
    }
}
