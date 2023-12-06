import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnSkip: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    actionsCon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 60,
        paddingHorizontal: 20,
        columnGap: 100
    },
    indicatorCon: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 310,
        paddingLeft: 20
    },
    logoCon: {
        position: 'absolute',
        top: 40,
        left: 20
    },
    indicator: {
        height: 5,
        width: 29,
        backgroundColor: 'rgba(217, 217, 217, 0.50)',
        marginHorizontal: 3,
        borderRadius: 7,
    },



    contentCon: {
        position: 'absolute', bottom: 0,
        width: '100%',
        borderBottomWidth: 2,
        height: '75%',
        padding: 20,
        justifyContent: 'flex-end',
        paddingBottom: 180
    },
    title: {
        color: '#FFF',
        fontSize: 25,
        marginBottom: 20,
        lineHeight: 35
    },
    description: {
        color: '#FFF',
        fontSize: 15,
    },
});

export default styles;