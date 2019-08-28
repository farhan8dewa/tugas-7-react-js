import React from 'react';
import { Button , Container ,Row ,Col ,Alert ,Badge ,Breadcrumb ,Card,Media} from "react-bootstrap";
function App() {
  return (
    <div>
    <br />
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">website React bootstrap</Alert>

        </Col>
        <Col>

        </Col>
        <Col>
        <Button>
          Notifications <Badge variant="light">9</Badge>
        </Button>
        <Button>
          massage <Badge variant="light">19</Badge>
        </Button>
        </Col>

        <Col>
        <Media>
          <img
          width={34}
          height={34}
          src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" />
          <br />
          <Media.Body>
            <h4>farhan</h4>
          </Media.Body>
        </Media>
        </Col>
      </Row>

    </Container>

    <Container>
      <Row>
        <Col>

        </Col>
        <Col>
        </Col>

        <Col>
        <Breadcrumb>
          <Breadcrumb.Item  href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item  href="/">info</Breadcrumb.Item>
          <Breadcrumb.Item  href="/" active>bola</Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row>
    </Container>

     <Container >
      <Row>
        <Col xs lg="3">
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"/>

          <Card.Body>
            <Card.Title>Diego Goldin Ukir rekor spesial Lawan Thailand</Card.Title>
            <Card.Text>Goldin sekarang menjadi pemain uruguaiy dengan caps terbanyak dalam membantu negaranya melibas thailnd di piala tiongkok diego Goldin boleh berbangga telah resmi menjadi </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col xs lg="3">
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"/>

          <Card.Body>
            <Card.Title>Neymar bahas kontrak baru di paris saint-germain</Card.Title>
            <Card.Text>
              ayah sang pemain bintang brasil berusaha meredam rumor keterkaitannya madrid.
              Neymar sedang berdiskusi dengan paris saint-germain soal perpanjangan kontrak
              bersama kampiun ligue 1 prancis demikian kata ayahnya
             </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs lg="3">

        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"/>

          <Card.Body>
            <Card.Title>inggris mau jadi team terbaik dunia</Card.Title>
            <Card.Text>
              kumpulan talenta terbaik yang dimiliki inggris saat ini
              membuat barkley sangat optimis.ross barkley merasa inggris
              sudah berada berada dijalur yang benar untuk bisa menjadi team terbaik dunia
              dengan banyaknya talenta yang muncul saat ini
             </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs lg="3">

        <Card style={{ width: '17rem' }}>
           <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"/>

          <Card.Body>
            <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
            <Card.Text>
            Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya
             untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim
             akan bentrok pada laga pemungkas grup K
             </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
     </Container>



 <br/> <br/>
    </div>
  );
}

export default App;
