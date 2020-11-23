import React, { Component } from "react";
import { Layout, Image, Button, Menu, Typography } from "antd";
import styles from "./Profile.module.scss";
import { Redirect } from "react-router";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
class Profile extends Component {
	state = {
		goToHome: false,
	};
	render() {
		return (
			<Layout className={styles.container}>
				<Sider>
					<Menu theme='dark' mode='inline' defaultSelectedKeys={["2"]}>
						<Menu.Item
							onClick={() => this.setState({ goToHome: true })}
							key='1'
							icon={<HomeOutlined />}
						>
							Home
						</Menu.Item>
						<Menu.Item key='2' icon={<HomeOutlined />}>
							Personal Info
						</Menu.Item>
						<Menu.Item key='3' icon={<HomeOutlined />}>
							Sing Out
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					{this.state.goToHome ? <Redirect to='/' /> : null}

					<Header>
						<Image
							onClick={() => this.setState({ goToHome: true })}
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
						<Typography.Title className={styles.welcome}>
							Welcome, User!
						</Typography.Title>
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Profile;
