import React, { useState } from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { AppText } from "../components/ui/AppText";

export const TodoScreen = ({ goBack, obj, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = title =>{
      onSave(obj.id, title)
      setModal(false)
  }

  return (
    <View>
      <EditModal
        value={obj.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <AppText style={styles.title}>{obj.title}</AppText>
        <Button title="Edit" style={styles.button} onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <Button title="Back" style={styles.button} color={THEME.GREY_COLOR} onPress={goBack} />
        <Button
          title="Remove"
          color={THEME.DANGER_COLOR}
          onPress={() => onRemove(obj.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: Dimensions.get('window').width / 3
  },
  title: {
    fontSize: 26,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
