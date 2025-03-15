import { useFunnel } from "@use-funnel/react-navigation-native";
import { View, Text, Button, FlatList } from "react-native";
import React from "react";

type StepContext = {
  Home: { a?: string };
  Login: { a: string; b?: string };
  Register: { a: string; b: string; c?: string };
  Overlay: { a: string; b: string; c: string };
};

export default function Funnel() {
  const funnel = useFunnel<StepContext>({
    id: "funnel",
    initial: {
      step: "Home",
      context: {
        a: "initial - a property",
      },
    },
  });
  return (
    <funnel.Render
      Home={({ context, history, historySteps }) => (
        <>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Home</Text>
            <View style={{ height: 20 }} />
            <Text>History Steps</Text>
            {historySteps.map((step) => (
              <Text key={step.step}>{step.step}</Text>
            ))}
            <View style={{ height: 20 }} />
            <Text>Context</Text>
            <FlatList
              data={Object.entries(context)}
              renderItem={({ item }) => (
                <Text key={item[0]}>
                  {item[0]}: {item[1]}
                </Text>
              )}
            />
          </View>
          <Button
            title="Login"
            onPress={() =>
              history.push("Login", {
                a: "from home step - a property",
              })
            }
          />
        </>
      )}
      Login={({ context, history, historySteps }) => (
        <>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Login</Text>
            <View style={{ height: 20 }} />
            <Text>History Steps</Text>
            {historySteps.map((step) => (
              <Text key={step.step}>{step.step}</Text>
            ))}
            <View style={{ height: 20 }} />
            <Text>Context</Text>
            <FlatList
              data={Object.entries(context)}
              renderItem={({ item }) => (
                <Text key={item[0]}>
                  {item[0]}: {item[1]}
                </Text>
              )}
            />
          </View>
          <Button
            title="Register"
            onPress={() =>
              history.push("Register", {
                a: "from login step - a property",
                b: "from login step - b property",
              })
            }
          />
        </>
      )}
      Register={({ context, history, historySteps }) => (
        <>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Register</Text>
            <View style={{ height: 20 }} />
            <Text>History Steps</Text>
            {historySteps.map((step) => (
              <Text key={step.step}>{step.step}</Text>
            ))}
            <View style={{ height: 20 }} />
            <Text>Context</Text>
            <FlatList
              data={Object.entries(context)}
              renderItem={({ item }) => (
                <Text key={item[0]}>
                  {item[0]}: {item[1]}
                </Text>
              )}
            />
          </View>
          <Button
            title="Go to First Step"
            onPress={() => {
              history.go(-2);
            }}
          />
          <Button
            title="Overlay"
            onPress={() =>
              history.push("Overlay", {
                a: "from register step - a property",
                b: "from register step - b property",
                c: "from register step - c property",
              })
            }
          />
        </>
      )}
      Overlay={funnel.Render.overlay({
        render({ close, history }) {
          return (
            <>
              <Text>Overlay : title</Text>
              <Button
                title="Overlay : Close Overlay"
                onPress={() => {
                  close();
                }}
              />
            </>
          );
        },
      })}
    />
  );
}
