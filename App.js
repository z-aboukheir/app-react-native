import {
	KeyboardAvoidingView,
	ImageBackground,
	StyleSheet,
	Text,
	View,
	FlatList,
	SafeAreaView,
	ScrollView,
	Platform,
	StatusBar,
	TextInput,
	TextComponent,
} from "react-native";
import React, { useState, useRef } from "react";
import Button from "./component/Button.js";
import MyModal from "./component/MyModal.js";

export default function App() {
	const [modalVisible, setModalVisible] = useState(false);
	const [index, setIndex] = useState("");
	const [editGoal, setEditGoal] = useState("");
	const inputRef = useRef(null);
	const [newGoal, setNewGoal] = useState("");
	const [sampleGoals, setSampleGoals] = useState([
		{ key: "1", title: "Faire les courses" },
		{ key: "2", title: "Aller à la salle de sport 3 fois par semaine" },
		{ key: "3", title: "Acheter mon premier appartement" },
		{ key: "4", title: "Perdre 5 kgs" },
		{ key: "5", title: "Gagner en productivité" },
		{ key: "6", title: "Apprendre un nouveau langage" },
		{ key: "7", title: "Faire une mission en freelance" },
		{ key: "8", title: "Organiser un meetup autour de la tech" },
		{ key: "9", title: "Faire un triathlon" },
	]);

	const toggleModal = () => setModalVisible(!modalVisible);

	const openModal = (goalKey) => {
		toggleModal();
		setIndex(goalKey);

		const goalEdit = sampleGoals.find((goal) => goal.key === goalKey);
		if (goalEdit) {
			setEditGoal(goalEdit.title);
		}
	};

	const handleEdit = (goalKey) => {
		if (newGoal != "") {
			const updateGoal = sampleGoals.map((item) =>
				goalKey == item.key
					? { key: item.key, title: newGoal }
					: { key: item.key, title: item.title }
			);
			setSampleGoals(updateGoal);
			setNewGoal("");
			inputRef.current.clear();
			toggleModal();
			console.log(updateGoal);
		}
	};

	const handleAdd = () => {
		if (newGoal != "") {
			const newGoalItem = { key: Date.now().toString(), title: newGoal };
			const newGoals = [...sampleGoals, newGoalItem];
			console.log(newGoalItem);
			setSampleGoals(newGoals);
			setNewGoal("");
			inputRef.current.clear();
		}
	};

	const handleRemove = (goalKey) => {
		const newGoals = sampleGoals.filter((goal) => goal.key !== goalKey);
		setSampleGoals(newGoals);
	};

	return (
		<ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundImage}>
			<SafeAreaView style={styles.safeAreaView}>
				<ScrollView>
					<Text style={styles.title}>Ma liste des tâches à faire!</Text>
					<FlatList
						data={sampleGoals}
						renderItem={({ item }) => (
							<>
								<Text>
									<Button
										handlePress={openModal}
										argumentFunction={item.key}
										stylesButton={styles.stylesButtonItem}
									>
										{item.title}
									</Button>
									<Button
										handlePress={handleRemove}
										argumentFunction={item.key}
										stylesButton={styles.stylesButtonRemove}
									>
										&#x2715;
									</Button>
								</Text>
							</>
						)}
						keyExtractor={(item) => item.key}
						style={styles.containerlistContent}
					/>
					<View style={styles.row}>
						<TextInput
							style={styles.input}
							ref={inputRef}
							placeholder={"Tâche à faire..."}
							onChangeText={(newText) => setNewGoal(newText)}
						/>
						<Button handlePress={handleAdd} stylesButton={styles.stylesButtonAdd}>
							Ajouter
						</Button>
					</View>

					<MyModal
						inputRef={inputRef}
						editGoal={editGoal}
						modalVisible={modalVisible}
						toggleModal={toggleModal}
						handleEdit={handleEdit}
						index={index}
						stylesButtonAdd={styles.stylesButtonAdd}
						setNewGoal={setNewGoal}
					/>
				</ScrollView>
			</SafeAreaView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: "cover",
	},

	row: {
		flexDirection: "row",
	},

	safeAreaView: {
		flex: 1,
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		margin: 15,
	},

	title: {
		color: "red",
		fontWeight: "bold",
		marginBottom: 15,
		textAlign: "center",
		fontSize: 25,
	},

	containerlistContent: {
		// flexGrow: 0,
		marginBottom: 15,
	},

	input: {
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
		backgroundColor: "white",
	},

	stylesButtonAdd: {
		backgroundColor: "#007AFF",
	},

	stylesButtonItem: {
		backgroundColor: "#6BB1E8",
		width: "90%",
	},

	stylesButtonRemove: {
		backgroundColor: "#007AFF",
	},
});
