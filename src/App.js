import React,{Component} from 'react';
import {
List,
Loader,
Grid,
Dimmer,
Placeholder,
Icon,
Button,
Divider,
Header,
Search,
Segment,
Image,
Container,
Menu,
Table,
Label
} from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div >
      <Segment placeholder style={{marginTop :'25px'}}>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign ='middle'>
              <Grid.Column >
                    <Header icon>
                      <Icon name ='search' size='massive'/>
                      Carai Document
                    </Header>
                    <Search placeholder ='Seacrh Document' />
                  </Grid.Column>
                <Grid.Column  >
                <Header icon>
                  <Icon name='pdf file outline' />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
         <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
        <h3> Website yang Terkait</h3>
          <List>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Google.com'>Google</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.Facebook.com'>Facebook</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>Semantic UI</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.niomic.com'>Niomic</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.react-bootstrap.netlify.app'>React</a>
              </List.Content>
            </List.Item>
         </List>
         </Grid.Column>
        </Grid><br /><br/>
        <Container>

  <Table celled>
   <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan ='2'>
          <Search placeholder ='Search Document...' style={{marginLeft : '900px'}} />
        </Table.HeaderCell>
      </Table.Row>
     <Table.Row textAlign ='center'>
       <Table.HeaderCell>Nama Document</Table.HeaderCell>
       <Table.HeaderCell>Jenis File</Table.HeaderCell>
     </Table.Row>
   </Table.Header>
   <Table.Body>
     <Table.Row>
       <Table.Cell>
         <Label ribbon>Panduan Belajar Javascript</Label>
       </Table.Cell>
       <Table.Cell textAlign='center'>PDF</Table.Cell>
     </Table.Row>
     <Table.Row >
       <Table.Cell>Panduan Belajar CSS</Table.Cell>
       <Table.Cell textAlign='center'>PDF</Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>Panduan Belajar JS</Table.Cell>
       <Table.Cell textAlign='center'>PDF</Table.Cell>
     </Table.Row>
   </Table.Body>
   <Table.Footer>
     <Table.Row>
       <Table.HeaderCell colSpan='3'>
         <Menu floated='right' pagination>
           <Menu.Item as='a' icon>
             <Icon name='chevron left' />
           </Menu.Item>
           <Menu.Item as='a'>1</Menu.Item>
           <Menu.Item as='a'>2</Menu.Item>
           <Menu.Item as='a'>3</Menu.Item>
           <Menu.Item as='a'>4</Menu.Item>
           <Menu.Item as='a' icon>
            <Icon name='chevron right' />
           </Menu.Item>
         </Menu>
       </Table.HeaderCell>
     </Table.Row>
   </Table.Footer>
 </Table>
        </Container>
      </div>
    )
  }
}

export default App;
