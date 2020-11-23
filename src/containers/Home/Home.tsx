import React from "react";
import styles from "./Home.module.scss";

import {
	Layout,
	Menu,
	Button,
	PageHeader,
	Card,
	Col,
	Row,
	Image,
	Modal,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Redirect } from "react-router";

const data = [
	{ title: "Tasks", content: "Property Tasks" },
	{ title: "Communication", content: "Property Communication" },
	{ title: "Accounting", content: "Property Accounting" },
	{ title: "Associates", content: "Property Associates" },
	{ title: "Rentals", content: "Property Rentals" },
	{ title: "History", content: "Property History" },
];

const { Header, Sider, Content } = Layout;
class Home extends React.Component {
	state = {
		goToProfile: false,
		currentInfo: {
			title: "",
			content: "",
		},
		visible: false,
	};

	openModal = (info: any) => {
		this.setState({ currentInfo: info, visible: true });
	};

	hide = () => {
		this.setState({ visible: false });
	};

	render() {
		const cards = data.map((info) => {
			return (
				<Col className={styles.card} span={8}>
					<Card title={info.title} bordered={false}>
						{info.content}
					</Card>
					<Button
						onClick={() => this.openModal(info)}
						className={styles.button}
					>
						See More
					</Button>
				</Col>
			);
		});

		return (
			<Layout className={styles.container}>
				{this.state.goToProfile ? <Redirect to='/profile' /> : null}
				<Modal
					onCancel={this.hide}
					onOk={this.hide}
					visible={this.state.visible}
				>
					{this.state.currentInfo.title}
				</Modal>
				<Sider>
					<PageHeader className={styles.pageHeader} title='Properties' />

					<Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
						<Menu.Item key='1' icon={<HomeOutlined />}>
							123 Main St
						</Menu.Item>
						<Menu.Item key='2' icon={<HomeOutlined />}>
							456 Side St
						</Menu.Item>
						<Menu.Item key='3' icon={<HomeOutlined />}>
							789 Local Ave
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header>
						<Image
							className={styles.logo}
							src={require("../../images/Screen Shot 2020-09-07 at 1.45.04 PM.png")}
						/>
						<Button
							onClick={() => this.setState({ goToProfile: true })}
							className={styles.profile}
						>
							Profile
						</Button>
					</Header>
					<Content>
						<Row gutter={16}>{cards}</Row>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Home;
