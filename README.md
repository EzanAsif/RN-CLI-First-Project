# RN-CLI-First-Project

- Done with Environment setup.
- Setted up stack navigation.


# Installing react-native-vector-icons in Windows

1-First, run : 

npm install --save react-native-vector-icons

2-Then, add the following in android/app/build.gradle : 

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

3-In android/settings.gradle add :

include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')

4-In dependencies in android/app/build.gradle add : 

implementation project(':react-native-vector-icons')
