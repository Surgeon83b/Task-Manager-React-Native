import { Colors } from '@/constants';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SortDirection, SortOption } from '@/types';
import { CustomText } from '@/components';

export const SortSelector = ({
  sortBy,
  direction,
  onSortChange,
}: {
  sortBy: SortOption;
  direction: SortDirection;
  onSortChange: (sortBy: SortOption, direction: SortDirection) => void;
}) => {
  return (
    <View style={selectorStyles.container}>
      <View style={selectorStyles.pickerContainer}>
        <CustomText style={selectorStyles.label}>Sort by:</CustomText>
        <View style={selectorStyles.picker}>
          <Picker
            style={{ color: Colors.PLACEHOLDER }}
            selectedValue={sortBy}
            onValueChange={(value) =>
              onSortChange(value as SortOption, direction)
            }
            dropdownIconColor={Colors.PRIMARY_TEXT}
            mode="dropdown"
          >
            <Picker.Item label="no sorting" value="default" />
            <Picker.Item label="date" value="date" />
            <Picker.Item label="status" value="status" />
          </Picker>
        </View>
      </View>

      <View style={selectorStyles.pickerContainer}>
        <CustomText style={selectorStyles.label}>Direction:</CustomText>
        <View style={selectorStyles.picker}>
          <Picker
            style={{ color: Colors.PLACEHOLDER }}
            selectedValue={direction}
            onValueChange={(value) =>
              onSortChange(sortBy, value as SortDirection)
            }
            dropdownIconColor={Colors.PRIMARY_TEXT}
            mode="dropdown"
          >
            <Picker.Item label="asc" value="asc" />
            <Picker.Item label="desc" value="desc" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

const selectorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.SECONDARY_BACKGROUND,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_BACKGROUND,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_ACTIVE_BUTTON,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  picker: {
    color: Colors.PRIMARY_TEXT,
    height: 48,
  },
  label: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
});
