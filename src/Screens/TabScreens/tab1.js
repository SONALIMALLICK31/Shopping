// import React, { Component } from 'react';
// import { Alert, View, ActivityIndicator } from 'react-native';
// import { Container, Content, List, Text } from 'native-base';

// export default class ListThumbnailExample extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             isLoading: true,
//             data: null,
//             setModalVisible: false,
//             modalArticleData: {}
//         }
//     }

//     handleItemDataOnPress = (articleData) => {
//         this.setState({
//             setModalVisible: true,
//             modalArticleData: articleData
//         });
//     }

//     handleModalClose = () => {
//         this.setState({
//             setModalVisible: false,
//             modalArticleData: {}
//         });
//     }


//     render() {
//         console.log(this.state.data);

//         // let view = this.state.isLoading ? (
//         //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         //         <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
//         //         <Text style={{ marginTop: 10 }} children="Please Wait.." />
//         //     </View>
//         // ) : (
//         //     <List
//         //         dataArray={this.state.data}
//         //         renderRow={(item) => {
//         //             return (
//         //                 <DataItem onPress={this.handleItemDataOnPress} data={item} />
//         //             )
//         //         }} />
//         // )

//         return (
//             <Container>
//                 <Content>
//                     {/* {view} */}
//                 </Content>
//             </Container>
//         );
//     }
// }

import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>

                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}