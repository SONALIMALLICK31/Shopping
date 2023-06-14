import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Right, Body, Title } from 'native-base';
import Tab1 from './TabScreens/tab1';
import Tab2 from './TabScreens/tab2';
import Tab3 from './TabScreens/tab3';
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#009387',}} hasTabs>

                    <Left />
                    <Body style={{backgroundColor:"lightpink"}}> 
                        <Title>Free App</Title>
                     </Body>
                    <Right />
                </Header>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Home">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Orders">
                        <Tab2 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#009387' }} activeTabStyle={{ backgroundColor: '#009387' }} textStyle={{ color: 'white' }} activeTextStyle={{ color: 'white' }} heading="Wishlist">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}